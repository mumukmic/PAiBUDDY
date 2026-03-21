import { useState, useEffect } from 'react';
import { useTripContext } from '../context/TripContext';
import {
  MapPin, Clock, ChevronDown, ChevronUp,
  Settings, Navigation, Ticket, Droplets, Zap, CreditCard, Banknote, Package, Book,
} from 'lucide-react';
import { ShiftTimeModal } from './ShiftTimeModal';

// ─── Tag chip config ──────────────────────────────────────────────────────────
type TagType = 'ticket' | 'water' | 'powerbank' | 'card' | 'cash' | 'other' | 'passport';

const TAG_STYLES: Record<TagType, { bg: string; text: string; Icon: React.ElementType }> = {
  ticket:    { bg: '#FDF5F4', text: '#E03E1A', Icon: Ticket },
  water:     { bg: '#F3FAFF', text: '#18A0FB', Icon: Droplets },
  powerbank: { bg: '#F4FBF2', text: '#25B003', Icon: Zap },
  card:      { bg: '#FAF8FD', text: '#795DAE', Icon: CreditCard },
  cash:      { bg: '#F2F5F8', text: '#003076', Icon: Banknote },
  passport:  { bg: '#FFF4E6', text: '#D97706', Icon: Book },
  other:     { bg: '#F5F5F5', text: '#666666', Icon: Package },
};

function TagChip({ label, type }: { label: string; type: TagType }) {
  const s = TAG_STYLES[type] ?? TAG_STYLES.other;
  return (
    <span
      className="inline-flex items-center gap-1 px-[6px] py-[4px] rounded-[6px]"
      style={{
        background: s.bg,
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--text-label-caps)',
        fontWeight: 'var(--font-weight-regular)',
        color: s.text,
        whiteSpace: 'nowrap',
      }}
    >
      <s.Icon className="w-3 h-3 flex-shrink-0" />
      {label}
    </span>
  );
}

// ─── Dashed divider ───────────────────────────────────────────────────────────
function DashedDivider() {
  return (
    <div className="w-full my-3">
      <svg width="100%" height="1" className="block">
        <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="#E3E6ED" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}

// ─── Step bullet ──────────────────────────────────────────────────────────────
function Bullet({ isCurrent, number }: { isCurrent: boolean; number: number }) {
  if (isCurrent) {
    return (
      <div className="relative w-4 h-4 flex-shrink-0">
        <svg className="absolute block w-full h-full" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" fill="white" />
          <circle cx="8" cy="8" r="6.5" stroke="#25B003" strokeWidth="3" />
        </svg>
      </div>
    );
  }
  return (
    <div className="relative w-4 h-4 flex-shrink-0">
      <svg className="absolute block w-full h-full" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="8" fill="#CBD0DD" />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: '12px',
          fontWeight: 'var(--font-weight-regular)',
          color: '#F4FBF2',
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </div>
  );
}

// ─── Time badge ───────────────────────────────────────────────────────────────
function TimeBadge({ time, isCurrent }: { time: string; isCurrent: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-[10px] py-[2px] rounded-full flex-shrink-0"
      style={{
        background: isCurrent ? '#25B003' : '#EFF2F6',
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--text-label)',
        fontWeight: 'var(--font-weight-semibold)',
        color: isCurrent ? '#F4FBF2' : 'var(--foreground)',
      }}
    >
      <Clock className="w-3 h-3" />
      {time}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function Now() {
  const { tripData, getCurrentActivity, shiftActivities, shiftDayActivities } = useTripContext();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1, 2, 3]));
  const [showShiftModal, setShowShiftModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const currentActivity = getCurrentActivity();
  const now = new Date();
  const tripStart = new Date(tripData.startDate);
  const daysDiff = Math.floor((now.getTime() - tripStart.getTime()) / (1000 * 60 * 60 * 24));
  const currentDay = daysDiff + 1;

  // Group all activities by day
  const activitiesByDay = tripData.activities.reduce((acc, a) => {
    if (!acc[a.day]) acc[a.day] = [];
    acc[a.day].push(a);
    return acc;
  }, {} as Record<number, typeof tripData.activities>);
  const days = Object.keys(activitiesByDay).map(Number).sort((a, b) => a - b);

  const toggleDay = (day: number) => {
    const next = new Set(expandedDays);
    if (next.has(day)) next.delete(day);
    else next.add(day);
    setExpandedDays(next);
  };

  const getDayDate = (day: number) => {
    const d = new Date(tripStart);
    d.setDate(d.getDate() + day - 1);
    return d.toLocaleDateString('th-TH', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const dateStr = currentTime.toLocaleDateString('th-TH', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });

  const isComingSoon = currentDay < 1;

  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-family-primary)' }}
    >
      {/* ── Header Card ── */}
      <div
        className="relative overflow-hidden rounded-b-[16px]"
        style={{ background: 'var(--card)', boxShadow: '0px 1px 3px rgba(16,24,40,0.10), 0px -1px 2px rgba(16,24,40,0.06)' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full"
          style={{
            width: 160, height: 160,
            top: -32, right: -20,
            background: 'var(--primary)',
            opacity: 0.15,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 96, height: 96,
            top: 108, right: 60,
            background: 'var(--primary)',
            opacity: 0.08,
          }}
        />

        <div className="relative z-10 px-4 pt-12 pb-5">
          <p
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-regular)',
              color: 'var(--foreground)',
              marginBottom: '6px',
            }}
          >
            {tripData.tripName}
          </p>
          <div className="flex items-center gap-[6px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="var(--foreground)" strokeWidth="1.2" />
              <line x1="1" y1="5.5" x2="13" y2="5.5" stroke="var(--foreground)" strokeWidth="1.2" />
              <line x1="4.5" y1="1" x2="4.5" y2="3.5" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="9.5" y1="1" x2="9.5" y2="3.5" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--foreground)',
              }}
            >
              {dateStr}
            </span>
          </div>
        </div>
      </div>

      <div className="px-3 pt-4 pb-6 space-y-4">

        {/* ── Current Activity Card ── */}
        {isComingSoon ? (
          <div
            className="rounded-[8px] flex overflow-hidden"
            style={{
              background: 'var(--card)',
              boxShadow: '0px 0px 21px rgba(37,176,3,0.18), 0px 1px 3px rgba(16,24,40,0.10)',
            }}
          >
            {/* Green left accent bar */}
            <div className="flex-shrink-0 flex flex-col items-center py-4 justify-start">
              <div
                style={{
                  width: 8, height: 70,
                  background: '#25B003',
                  borderRadius: '0 28px 28px 0',
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 px-3 py-3">
              {/* Row: label + days badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--foreground)',
                  }}
                >
                  ทริปกำลังจะมาถึง
                </span>
                <span
                  className="inline-flex items-center gap-1 px-[10px] py-[2px] rounded-full flex-shrink-0"
                  style={{
                    background: '#25B003',
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: '#F4FBF2',
                  }}
                >
                  <Clock className="w-3 h-3" />
                  อีก {Math.abs(daysDiff)} วัน
                </span>
              </div>

              {/* Location row */}
              <div className="flex items-start gap-3 mb-1">
                {/* Green icon box */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-[6px]"
                  style={{ width: 36, height: 36, background: '#25B003' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="3" width="16" height="15" rx="2" stroke="white" strokeWidth="1.5"/>
                    <line x1="2" y1="8" x2="18" y2="8" stroke="white" strokeWidth="1.5"/>
                    <line x1="6" y1="1.5" x2="6" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="14" y1="1.5" x2="14" y2="5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    style={{
                      fontFamily: 'var(--font-family-primary)',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--foreground)',
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    {tripData.tripName}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-primary)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {tripData.activities.length} กิจกรรม · {days.length} วัน {days.length - 1} คืน
                  </p>
                </div>
              </div>

              <DashedDivider />
              <div className="flex flex-wrap gap-2">
                <TagChip label="พาสปอร์ต" type="card" />
                <TagChip label="ตั๋วเครื่องบิน" type="ticket" />
                <TagChip label="PowerBank" type="powerbank" />
                <TagChip label="น้ำดื่ม" type="water" />
              </div>
            </div>
          </div>
        ) : currentActivity ? (
          <div
            className="rounded-[8px] flex overflow-hidden"
            style={{
              background: 'var(--card)',
              boxShadow: '0px 0px 21px rgba(37,176,3,0.18), 0px 1px 3px rgba(16,24,40,0.10)',
            }}
          >
            {/* Green left accent bar */}
            <div
              className="flex-shrink-0 flex flex-col items-center py-4 justify-start"
              style={{ paddingLeft: 0 }}
            >
              <div
                style={{
                  width: 8, height: 70,
                  background: '#25B003',
                  borderRadius: '0 28px 28px 0',
                }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 px-3 py-3">
              {/* Row: label + time badge */}
              <div className="flex items-center justify-between mb-3">
                <span
                  style={{
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 'var(--text-label)',
                    fontWeight: 'var(--font-weight-regular)',
                    color: 'var(--foreground)',
                  }}
                >
                  คุณควรอยู่ที่
                </span>
                <TimeBadge time={currentActivity.time} isCurrent />
              </div>

              {/* Location row */}
              <div className="flex items-start gap-3 mb-1">
                {/* Green icon box */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-[6px]"
                  style={{ width: 36, height: 36, background: '#25B003' }}
                >
                  <MapPin className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p
                      style={{
                        fontFamily: 'var(--font-family-primary)',
                        fontSize: 'var(--text-h4)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--foreground)',
                        lineHeight: 1.3,
                      }}
                    >
                      {currentActivity.location}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentActivity.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-6 h-6 rounded-full transition-transform active:scale-95"
                      style={{ background: '#F0F9FF', color: '#00A3FF' }}
                      aria-label="เปิดใน Google Maps"
                      title="ดูแผนที่บน Google Maps"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-family-primary)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-regular)',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    {currentActivity.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              {currentActivity.tags && currentActivity.tags.length > 0 && (
                <>
                  <DashedDivider />
                  <div className="flex flex-wrap gap-2">
                    {currentActivity.tags.map((tag, i) => (
                      <TagChip key={i} label={tag.label} type={tag.type as TagType} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}

        {/* ── แผนทั้งวัน section header ── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Primary left bar accent */}
            <div
              style={{
                width: 4, height: 20,
                background: 'var(--primary)',
                borderRadius: '0 4px 4px 0',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--foreground)',
              }}
            >
              แผนทั้งวัน
            </span>
          </div>

          {/* เลื่อนเวลา button */}
          <button
            onClick={() => setShowShiftModal(true)}
            className="inline-flex items-center gap-1 px-3 rounded-[4px]"
            style={{
              height: 24,
              background: '#C7EBFF',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-label)',
              fontWeight: 'var(--font-weight-regular)',
              color: '#005585',
            }}
          >
            เลื่อนเวลา
            <Settings className="w-3 h-3" />
          </button>
        </div>

        {/* ── Day cards ── */}
        {days.map((day) => {
          const activities = activitiesByDay[day].sort((a, b) => a.time.localeCompare(b.time));
          const isExpanded = expandedDays.has(day);
          const dayDate = getDayDate(day);
          const isToday = day === currentDay;

          return (
            <div
              key={day}
              className="rounded-[8px] overflow-hidden"
              style={{
                background: 'var(--card)',
                boxShadow: '0px 1px 3px rgba(16,24,40,0.10), 0px 1px 2px rgba(16,24,40,0.06)',
                border: '1px solid #F5F7FA',
              }}
            >
              {/* Day header */}
              <button
                className="w-full flex items-center justify-between pr-3 pt-2 pb-2"
                onClick={() => toggleDay(day)}
              >
                <div className="flex items-center gap-2">
                  {/* Orange/primary left bar */}
                  <div
                    style={{
                      width: 6, height: 28,
                      background: 'var(--primary)',
                      borderRadius: '0 4px 4px 0',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-family-primary)',
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: '#525B75',
                    }}
                  >
                    {dayDate}
                    {isToday && (
                      <span
                        className="ml-2 px-2 py-0.5 rounded-full"
                        style={{
                          fontFamily: 'var(--font-family-primary)',
                          fontSize: 'var(--text-label-caps)',
                          fontWeight: 'var(--font-weight-bold)',
                          background: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                        }}
                      >
                        วันนี้
                      </span>
                    )}
                  </span>
                </div>
                {isExpanded
                  ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--foreground)' }} />
                  : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--foreground)' }} />
                }
              </button>

              {/* Dashed top separator */}
              {isExpanded && (
                <div className="px-4">
                  <svg width="100%" height="8" className="block">
                    <line x1="0" y1="4" x2="100%" y2="4" stroke="#E3E6ED" strokeDasharray="4 4" />
                  </svg>
                </div>
              )}

              {/* Timeline activities */}
              {isExpanded && (
                <div className="pb-2">
                  {activities.map((activity, index) => {
                    const isCurrent = currentActivity?.id === activity.id;
                    const isLast = index === activities.length - 1;

                    return (
                      <div key={activity.id} className="flex gap-2 pl-3 pr-3">
                        {/* Step column */}
                        <div className="flex flex-col items-center pt-[2px]" style={{ width: 16, flexShrink: 0 }}>
                          <Bullet isCurrent={isCurrent} number={index + 1} />
                          {!isLast && (
                            <div
                              className="flex-1 mt-1 mb-0"
                              style={{ width: 1, minHeight: 20, background: '#E3E6ED' }}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pb-1">
                          {/* Name row + time badge */}
                          <div className="flex items-start justify-between gap-2 pt-[1px]">
                            <div className="flex items-center gap-1 flex-1 min-w-0">
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 group"
                                style={{ textDecoration: 'none' }}
                              >
                                <span
                                  className="group-hover:opacity-70 transition-opacity"
                                  style={{
                                    fontFamily: 'var(--font-family-primary)',
                                    fontSize: 'var(--text-label)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    color: 'var(--foreground)',
                                  }}
                                >
                                  {activity.location}
                                </span>
                                <Navigation
                                  className="w-[14px] h-[14px] flex-shrink-0 opacity-50"
                                  style={{ color: 'var(--foreground)' }}
                                />
                              </a>
                            </div>
                            <TimeBadge time={activity.time} isCurrent={isCurrent} />
                          </div>

                          {/* Description */}
                          <p
                            className="mt-2"
                            style={{
                              fontFamily: 'var(--font-family-primary)',
                              fontSize: 'var(--text-label)',
                              fontWeight: 'var(--font-weight-regular)',
                              color: 'var(--muted-foreground)',
                            }}
                          >
                            {activity.description}
                          </p>

                          {/* Tags */}
                          {activity.tags && activity.tags.length > 0 && (
                            <>
                              <DashedDivider />
                              <div className="flex flex-wrap gap-2 pb-2">
                                {activity.tags.map((tag, i) => (
                                  <TagChip key={i} label={tag.label} type={tag.type as TagType} />
                                ))}
                              </div>
                            </>
                          )}

                          {/* Dashed separator between items (if no tags) */}
                          {(!activity.tags || activity.tags.length === 0) && !isLast && (
                            <DashedDivider />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Shift Time Bottom Sheet ── */}
      <ShiftTimeModal
        isOpen={showShiftModal}
        onClose={() => setShowShiftModal(false)}
        onShiftDay={(h) => shiftDayActivities(currentDay, h)}
        onShiftAll={(h) => shiftActivities(h)}
      />
    </div>
  );
}
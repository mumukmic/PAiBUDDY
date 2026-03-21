import { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';
import { useTripContext } from '../context/TripContext';
import type { ActivityItem } from '../context/TripContext';
import { AddActivityModal } from './AddActivityModal';
import { formatThaiDate, formatHeaderDate } from '../utils/dateFormat';

type Category = ActivityItem['category'] | 'all';

const filterTabs: { value: Category; label: string }[] = [
  { value: 'outfit', label: 'Outfit' },
  { value: 'activity', label: 'ตั๋วเข้าชม' },
  { value: 'restaurant', label: 'ร้านอาหาร' },
  { value: 'cafe', label: 'คาเฟ่/ขนมหวาน' },
  { value: 'other', label: 'อื่นๆ' },
];

const categoryLabel: Record<ActivityItem['category'], string> = {
  outfit: 'Outfit',
  activity: 'ตั๋วเข้าชม',
  restaurant: 'ร้านอาหาร',
  cafe: 'คาเฟ่/ขนมหวาน',
  other: 'อื่นๆ',
};


function ActivityCard({ item }: { item: ActivityItem }) {
  return (
    <div
      className="flex flex-col rounded-[8px] overflow-hidden"
      style={{
        boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px -1px 2px 0px rgba(16,24,40,0.06)',
        background: 'var(--card)',
      }}
    >
      {/* Image */}
      <div className="relative w-full" style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: '#EFF2F6' }}
          >
            <span style={{ fontSize: 'var(--text-label)', color: 'var(--muted-foreground)' }}>
              ไม่มีรูป
            </span>
          </div>
        )}
        {/* Category badge overlay */}
        <div
          className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-[4px]"
          style={{ background: '#EFF2F6' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 12,
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              lineHeight: 1.4,
            }}
          >
            {categoryLabel[item.category]}
          </span>
        </div>
      </div>

      {/* Info */}
      <div
        className="flex flex-col gap-1 p-2"
        style={{ background: 'white' }}
      >
        {/* Name & Description */}
        <div className="flex flex-col gap-2">
          <p
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 14,
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {item.name}
          </p>
          {item.description && (
            <p
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 12,
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--muted-foreground)',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {item.description}
            </p>
          )}
        </div>

        {/* Divider dashed */}
        <div style={{ height: 1, borderTop: '1px dashed #E3E6ED', margin: '2px 0' }} />

        {/* Date badge */}
        {item.date && (
          <div
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] self-start"
            style={{ background: '#FFEFCA' }}
          >
            <Calendar className="w-3 h-3" style={{ color: '#BC3803' }} strokeWidth={1.5} />
            <span
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 12,
                fontWeight: 'var(--font-weight-semibold)',
                color: '#BC3803',
                lineHeight: 1.4,
              }}
            >
              {formatThaiDate(item.date)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Activity() {
  const { tripData } = useTripContext();
  const [activeFilter, setActiveFilter] = useState<Category>('outfit');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = tripData.activityItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-family-primary)' }}
    >
      {/* ── Header Card ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'white',
          boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px -1px 2px 0px rgba(16,24,40,0.06)',
          height: 120,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 160,
            height: 160,
            background: '#D01C1B',
            right: -40,
            top: -32,
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 96,
            height: 96,
            background: '#D01C1B',
            right: 120,
            top: 100,
          }}
        />

        {/* Content */}
        <div className="absolute left-4 bottom-6 flex flex-col gap-2">
          <p
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--foreground)',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {tripData.tripName}
          </p>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" style={{ color: 'var(--foreground)' }} strokeWidth={1.5} />
            <span
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--foreground)',
                lineHeight: 1.5,
              }}
            >
              {formatHeaderDate(new Date(tripData.startDate))}
            </span>
          </div>
        </div>
      </div>

      {/* ── Filter Tabs (horizontal scroll) ── */}
      <div
        className="flex items-center gap-2 px-2 py-3 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className="flex-shrink-0 flex items-center px-3 py-1 rounded-full transition-all active:scale-95"
              style={{
                background: isActive ? 'var(--primary)' : '#EFF2F6',
                color: isActive ? '#FFF6E0' : 'var(--foreground)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── Cards Grid ── */}
      <div className="px-2 pb-8">
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20"
            style={{ color: 'var(--muted-foreground)' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-regular)',
                margin: 0,
              }}
            >
              ยังไม่มีรายการ
            </p>
            <p
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-regular)',
                margin: '4px 0 0',
                color: 'var(--muted-foreground)',
              }}
            >
              กด + เพื่อเพิ่มรายการใหม่
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {filtered.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* ── FAB ── */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-[84px] right-4 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95"
        style={{
          background: 'var(--primary)',
          boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px -1px 2px 0px rgba(16,24,40,0.06)',
        }}
        aria-label="เพิ่มกิจกรรม"
      >
        <Plus className="w-6 h-6" style={{ color: 'white' }} strokeWidth={2} />
      </button>

      {/* ── Add Activity Modal ── */}
      <AddActivityModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

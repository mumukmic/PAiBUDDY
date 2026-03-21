import { useTripContext } from '../context/TripContext';
import { Shirt, MapPin } from 'lucide-react';

export function Outfit() {
  const { tripData } = useTripContext();

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', fontFamily: 'var(--font-family-primary)' }}>

      {/* Header */}
      <div
        className="relative px-5 pt-12 pb-6 overflow-hidden"
        style={{ background: 'var(--secondary)' }}
      >
        <div
          className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20"
          style={{ background: 'var(--primary)' }}
        />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
            style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            <Shirt className="w-3.5 h-3.5" />
            <span style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }}>
              Outfit Gallery
            </span>
          </div>
          <h2 style={{ color: 'var(--secondary-foreground)', marginBottom: '4px' }}>ชุดประจำวัน</h2>
          <p style={{ fontSize: 'var(--text-label)', color: 'rgba(255,255,255,0.5)' }}>
            ธีมและชุดแต่งกายแต่ละวันของทริป
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="p-4 space-y-4">
        {tripData.outfits.map((outfit) => {
          const dayActivities = tripData.activities
            .filter((a) => a.day === outfit.day)
            .sort((a, b) => a.time.localeCompare(b.time));

          return (
            <div
              key={outfit.id}
              className="rounded-[var(--radius-card)] overflow-hidden"
              style={{ background: 'var(--card)', boxShadow: 'var(--elevation-sm)' }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={outfit.imageUrl}
                  alt={outfit.theme}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }}
                />
                {/* Day badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full"
                  style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                >
                  <span style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--font-weight-bold)' }}>
                    Day {outfit.day}
                  </span>
                </div>
                {/* Theme name on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className="mb-0"
                    style={{ color: '#FFFFFF', fontSize: 'var(--text-h4)' }}
                  >
                    {outfit.dayName}
                  </h3>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                {/* Theme */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-badge)] mb-4"
                  style={{ background: 'var(--muted)' }}
                >
                  <span style={{ fontSize: 'var(--text-label)', color: 'var(--muted-foreground)' }}>ธีม:</span>
                  <span
                    style={{
                      fontSize: 'var(--text-label)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {outfit.theme}
                  </span>
                </div>

                {/* Activities */}
                {dayActivities.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-4 rounded-full" style={{ background: 'var(--primary)' }} />
                      <p
                        style={{
                          fontSize: 'var(--text-label)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--muted-foreground)',
                          margin: 0,
                        }}
                      >
                        กิจกรรมประจำวัน
                      </p>
                    </div>
                    <div className="space-y-2">
                      {dayActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start gap-3 px-3 py-2 rounded-[var(--radius-button)]"
                          style={{ background: 'var(--muted)' }}
                        >
                          <span
                            className="flex-shrink-0 px-2 py-0.5 rounded-[var(--radius-badge)]"
                            style={{
                              fontSize: 'var(--text-label-caps)',
                              fontWeight: 'var(--font-weight-bold)',
                              background: 'var(--secondary)',
                              color: 'var(--secondary-foreground)',
                            }}
                          >
                            {activity.time}
                          </span>
                          <div className="flex items-center gap-1 min-w-0">
                            <MapPin
                              className="w-3 h-3 flex-shrink-0"
                              style={{ color: 'var(--primary)' }}
                            />
                            <span
                              className="truncate"
                              style={{ fontSize: 'var(--text-label)', color: 'var(--foreground)', fontWeight: 'var(--font-weight-semibold)' }}
                            >
                              {activity.location}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

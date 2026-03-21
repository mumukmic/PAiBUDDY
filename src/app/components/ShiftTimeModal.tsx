import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ShiftTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShiftDay: (hours: number) => void;
  onShiftAll: (hours: number) => void;
}

export function ShiftTimeModal({ isOpen, onClose, onShiftDay, onShiftAll }: ShiftTimeModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.35)' }}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        className="relative w-full animate-slide-up"
        style={{
          background: 'var(--card)',
          borderRadius: '16px 16px 0 0',
          zIndex: 60,
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 'max(56px, env(safe-area-inset-bottom, 56px))',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
        }}
      >
        {/* Handle bar */}
        <div
          className="mx-auto mb-3 rounded-full"
          style={{ width: 36, height: 4, background: 'var(--border)' }}
        />

        {/* Header row */}
        <div className="flex items-center justify-between mb-1">
          <span
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#525B75',
            }}
          >
            เลื่อนเวลา
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-6 h-6 rounded-full transition-opacity active:opacity-60"
            aria-label="ปิด"
          >
            <X className="w-4 h-4" style={{ color: '#334155' }} strokeWidth={2} />
          </button>
        </div>

        {/* Subtitle */}
        <p
          className="mb-3"
          style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--text-label)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--muted-foreground)',
          }}
        >
          เลื่อนเวลากิจกรรมวันนี้
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-[10px]">
          {/* Row 1 — Today buttons (grey) */}
          <div className="flex gap-2">
            {[
              { label: 'วันนี้ −1 ชม.', hours: -1 },
              { label: 'วันนี้ +1 ชม.', hours: 1 },
            ].map(({ label, hours }) => (
              <button
                key={label}
                onClick={() => { onShiftDay(hours); onClose(); }}
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-[8px] transition-opacity active:opacity-70"
                style={{
                  background: '#EFF2F6',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--foreground)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Row 2 — All trip buttons (primary orange) */}
          <div className="flex gap-2">
            {[
              { label: 'ทั้งทริป −1 ชม.', hours: -1 },
              { label: 'ทั้งทริป +1 ชม.', hours: 1 },
            ].map(({ label, hours }) => (
              <button
                key={label}
                onClick={() => { onShiftAll(hours); onClose(); }}
                className="flex-1 flex items-center justify-center px-4 py-2 rounded-[8px] transition-opacity active:opacity-80"
                style={{
                  background: 'var(--primary)',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--primary-foreground)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
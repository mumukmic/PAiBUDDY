import { Outlet, Link, useLocation } from 'react-router';
import { Clock, Zap, DollarSign, CheckSquare, Plus } from 'lucide-react';
import { useState } from 'react';
import { AddExpenseModal } from './AddExpenseModal';

const navItems = [
  { path: '/', label: 'ตอนนี้', icon: Clock },
  { path: '/activity', label: 'กิจกรรม', icon: Zap },
  { path: '/expense', label: 'ค่าใช้จ่าย', icon: DollarSign },
  { path: '/overall', label: 'เตรียมตัว', icon: CheckSquare },
];

export function Layout() {
  const location = useLocation();
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  // Don't show expense FAB on Activity, Now, and Overall pages
  const hideExpenseFab = location.pathname === '/activity' || location.pathname === '/' || location.pathname === '/overall';

  return (
    <div
      className="min-h-screen pb-[72px]"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-family-primary)' }}
    >
      <Outlet />

      {/* ── Floating Add Expense Button (hidden on Activity and Now pages) ── */}
      {!hideExpenseFab && (
        <button
          onClick={() => setIsExpenseModalOpen(true)}
          className="fixed bottom-[84px] right-4 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95"
          style={{
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            boxShadow: '0 4px 16px rgba(128,0,0,0.28)',
          }}
          aria-label="เพิ่มค่าใช้จ่าย"
        >
          <Plus className="w-6 h-6" strokeWidth={2.5} />
        </button>
      )}

      {/* ── Bottom Tab Bar ── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <div className="flex items-stretch h-[60px] px-3">
          {navItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="flex-1 flex flex-col items-center justify-center gap-[2px] relative"
                style={{ textDecoration: 'none' }}
              >
                {/* Active pill background */}
                {isActive && (
                  <span
                    className="absolute inset-x-1 inset-y-[6px] rounded-[100px]"
                    style={{ background: '#EDEDED' }}
                  />
                )}
                <span className="relative z-10 flex flex-col items-center gap-[2px]">
                  <Icon
                    className="w-[20px] h-[20px]"
                    strokeWidth={isActive ? 2.5 : 1.8}
                    style={{ color: isActive ? 'var(--primary)' : 'var(--foreground)' }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-family-primary)',
                      fontSize: 'var(--text-label-caps)',
                      fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                      color: isActive ? 'var(--primary)' : 'var(--foreground)',
                      letterSpacing: '0.1px',
                    }}
                  >
                    {label}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <AddExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
      />
    </div>
  );
}
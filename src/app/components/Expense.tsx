import { useState } from 'react';
import { useTripContext } from '../context/TripContext';
import type { Expense as ExpenseType } from '../context/TripContext';
import { Trash2, User, ArrowLeft, ChevronRight, ChevronDown, ChevronUp, MoreVertical, CheckCircle2, Clock, Tag, Edit2 } from 'lucide-react';
import svgPaths from '../../imports/svg-vykgsp9hfx';
import { formatHeaderDate } from '../utils/dateFormat';

const isExpenseRepayment = (e: ExpenseType) => e.isRepayment || e.name.startsWith('คืนเงิน - ');


// ── Person color palette (matches Figma) ────────────────────────────────────
const PERSON_COLORS = [
  { color: '#E03E1A', bg: '#FDF5F4' },
  { color: '#18A0FB', bg: '#F3FAFF' },
  { color: '#25B003', bg: '#F4FBF2' },
  { color: '#795DAE', bg: '#E5DCF6' },
];

// ── Category left-bar accent colors ─────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  บัตรเข้าชม: '#18A0FB',
  ที่พัก: '#25B003',
  เดินทาง: '#E03E1A',
  อาหาร: '#E36414',
  ช้อปปิ้ง: '#795DAE',
  อื่นๆ: '#8A9099',
};


// ── Money icon (from Figma SVG paths) ────────────────────────────────────────
function MoneyIcon({ color = '#F5F7FA' }: { color?: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 14.3333 12.3333" fill="none">
      <path d={svgPaths.p22fe5100} stroke={color} strokeWidth="1.5" />
      <path d={svgPaths.p2311e00} stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p1a0d31f0} stroke={color} />
    </svg>
  );
}

// ── Person icon (from Figma SVG paths) ───────────────────────────────────────
function PersonIcon({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 9.5 4.75" fill="none">
      <path d={svgPaths.p312e4100} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(1.5 0) scale(0.9)" />
      <path d={svgPaths.p27722a00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" transform="translate(0.5 5) scale(0.85)" />
    </svg>
  );
}
// ── Summary Card ──────────────────────────────────────────────────────────────
function SummaryCard({
  total,
  perPerson,
  people,
}: {
  total: number;
  perPerson: number;
  people: { id: string; name: string; avatar?: string }[];
}) {
  return (
    <div
      className="bg-white rounded-[12px] p-4 flex flex-col gap-4 relative overflow-hidden"
      style={{
        boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)',
        border: '1px solid #F5F7FA',
      }}
    >
      {/* Blue left accent bar */}
      <div className="absolute left-0 top-6 bottom-6 w-[6px] bg-[#00A3FF] rounded-r-md" />

      <div className="pl-3 flex flex-col gap-4">
        {/* Row 1: label + people badge */}
        <div className="flex items-center justify-between">
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 500, color: '#8A94AD' }}>
            ค่าใช้จ่ายทั้งหมด
          </span>
          <div className="flex items-center gap-1 px-[10px] py-[2px] rounded-full bg-[#00A3FF]">
            <User className="w-3 h-3 text-white" />
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 700, color: 'white' }}>
              {people.length} คน
            </span>
          </div>
        </div>

        {/* Row 2: icon + amount */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-[12px] bg-[#00A3FF] flex items-center justify-center flex-shrink-0">
            {/* simple money bill icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="6" width="20" height="12" rx="2" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="2"/>
              <path d="M6 9H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 15H18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 26, fontWeight: 700, color: '#3E465B', lineHeight: 1 }}>
              {total.toLocaleString()}
            </span>
            <div className="flex items-center gap-1 px-2 py-[2px] rounded-md bg-[#F5F7FA] w-fit mt-1">
              <User className="w-3 h-3 text-[#525B75]" />
              <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 600, color: '#525B75' }}>
                คนละประมาณ {perPerson.toLocaleString(undefined, { maximumFractionDigits: 0 })} ฿
              </span>
            </div>
          </div>
        </div>

        {/* Dashed divider */}
        <div style={{ borderTop: '1px dashed #E3E6ED' }} />

        {/* Person Avatars */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {people.map((p) => (
            <div key={p.id} className="flex items-center gap-1 flex-shrink-0">
              {p.avatar ? (
                 <img src={p.avatar} alt={p.name} className="w-5 h-5 rounded-full object-cover" />
              ) : (
                 <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                   <User className="w-3 h-3 text-gray-500" />
                 </div>
              )}
              <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 600, color: '#525B75' }}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Expense Accordion Card (Overview Tab) ──────────────────────────────────────────────────────────
function ExpenseAccordionCard({
  expense,
  people,
  isExpanded,
  onToggle,
  onDelete,
  allExpenses,
}: {
  expense: ExpenseType;
  people: ReturnType<typeof useTripContext>['tripData']['people'];
  isExpanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  allExpenses: ExpenseType[];
}) {
  const payer = people.find((p) => p.id === expense.paidBy);

  return (
    <div
      className="flex flex-col rounded-[8px] overflow-hidden bg-white mb-3 transition-all"
      style={{
        boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)',
        border: '1px solid #F5F7FA',
      }}
    >
      <div 
        className="w-full flex flex-col p-3 transition-all bg-white relative"
      >
        <div className="flex items-start justify-between">
          <button className="flex-1 text-left flex flex-col gap-2 relative pl-3" onClick={onToggle}>
            <div className="absolute left-0 top-1 bottom-1 w-[4px] bg-[#00A3FF] rounded-r-[4px]"></div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 16, fontWeight: 700, color: '#525B75' }}>
                {expense.name}
              </span>
              {expense.category && (
                <div className="flex items-center gap-1 bg-[#F5F7FA] px-2 py-[2px] rounded-[6px]">
                  <Tag className="w-[10px] h-[10px] text-[#525B75]" />
                  <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 600, color: '#525B75' }}>
                    {expense.category}
                  </span>
                </div>
              )}
              <Edit2 className="w-[14px] h-[14px] text-[#8A94AD] ml-1" />
            </div>

            <div className="flex items-center gap-2">
              <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 20, fontWeight: 700, color: '#3E465B' }}>
                {expense.totalAmount.toLocaleString()} ฿
              </span>
              {payer && (
                <div className="flex items-center gap-1 ml-2">
                  {payer.avatar ? (
                    <img src={payer.avatar} alt={payer.name} className="w-[14px] h-[14px] rounded-full object-cover" />
                  ) : (
                    <div className="w-[14px] h-[14px] rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-[10px] h-[10px] text-gray-500" />
                    </div>
                  )}
                  <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#8A94AD' }}>
                    {payer.name}
                  </span>
                </div>
              )}
            </div>
          </button>

          <div className="flex items-center gap-1">
             <button onClick={onToggle} className="p-1 active:bg-gray-100 rounded-full transition-colors">
                {isExpanded ? <ChevronUp className="w-5 h-5 text-[#3E465B]" /> : <ChevronDown className="w-5 h-5 text-[#3E465B]" />}
             </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-3 pb-4 pt-2 flex flex-col border-t border-dashed border-[#E3E6ED]">
          <div className="flex items-center justify-between mb-3">
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#8A94AD' }}>ผู้ร่วมบิล</span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 700, color: '#525B75' }}>
               {expense.splitAmong.length} คน
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {[...expense.splitAmong].sort((a, b) => a === expense.paidBy ? -1 : b === expense.paidBy ? 1 : 0).map(pid => {
              const splitPerson = people.find(p => p.id === pid);
              if (!splitPerson) return null;
              
              let statusEl;
              if (pid === expense.paidBy) {
                statusEl = (
                  <div className="flex items-center justify-start gap-1">
                    <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 600, color: '#8A94AD' }}>เจ้าของบิล 👑</span>
                  </div>
                );
              } else {
                const hasPaid = allExpenses.some(r => isExpenseRepayment(r) && r.repaymentFor === expense.id && r.paidBy === pid && r.splitAmong.includes(expense.paidBy));
                if (hasPaid) {
                  statusEl = (
                    <div className="flex items-center justify-center gap-1 bg-[#EAF7E8] px-[6px] py-[2px] rounded-full w-fit">
                      <CheckCircle2 className="w-[12px] h-[12px]" color="white" fill="#25B003" />
                      <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 700, color: '#25B003' }}>จ่ายแล้ว</span>
                    </div>
                  );
                } else {
                  statusEl = (
                    <div className="flex items-center justify-center gap-1 bg-[#F5F7FA] px-[6px] py-[2px] rounded-full w-fit">
                      <Clock className="w-[12px] h-[12px]" color="#525B75" />
                      <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 700, color: '#525B75' }}>รอก่อนนะ</span>
                    </div>
                  );
                }
              }

              return (
                <div key={pid} className="grid grid-cols-[1fr_80px_60px] gap-2 items-center">
                  <div className="flex items-center gap-2 max-w-full overflow-hidden">
                    {splitPerson.avatar ? (
                      <img src={splitPerson.avatar} alt={splitPerson.name} className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-gray-500" />
                      </div>
                    )}
                    <span className="truncate" style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#3E465B' }}>{splitPerson.name}</span>
                  </div>
                  <div className="flex justify-center items-center">
                    {statusEl}
                  </div>
                  <div className="text-right flex items-center justify-end">
                    <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 600, color: '#8A94AD' }}>
                      {expense.amountPerPerson.toLocaleString()} ฿
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-end mt-4">
             <button onClick={onDelete} className="flex items-center gap-1 text-[#E03E1A] bg-[#FDF5F4] px-3 py-1.5 rounded-md hover:bg-[#FCEAE8] transition-colors">
                <Trash2 className="w-3 h-3" />
                <span className="text-[10px] font-semibold">ลบรายการ</span>
             </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Person Accordion Card ─────────────────────────────────────────────────────
function PersonAccordionCard({
  person,
  people,
  expenses,
  isExpanded,
  onToggle,
}: {
  person: ReturnType<typeof useTripContext>['tripData']['people'][0];
  people: ReturnType<typeof useTripContext>['tripData']['people'];
  expenses: ReturnType<typeof useTripContext>['tripData']['expenses'];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ownedExpenses = expenses.filter(e => e.paidBy === person.id && !isExpenseRepayment(e));
  const totalPaid = ownedExpenses.reduce((sum, e) => sum + e.totalAmount, 0);

  const receivedRepayments = expenses.filter(e => isExpenseRepayment(e) && e.splitAmong.includes(person.id));
  const totalReceived = receivedRepayments.reduce((sum, e) => sum + e.totalAmount, 0);

  return (
    <div 
      className="flex flex-col rounded-[8px] overflow-hidden bg-white mb-3 transition-all"
      style={{
        boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)',
        border: '1px solid #F5F7FA',
      }}
    >
      <button 
        onClick={onToggle}
        className="w-full flex items-start justify-between p-3 text-left transition-all active:bg-gray-50 bg-white z-10 relative"
      >
        <div className="flex items-center gap-3">
          {person.avatar ? (
            <img src={person.avatar} alt={person.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-gray-500" />
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 18, fontWeight: 600, color: '#3E465B' }}>
              {person.name}
            </span>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#8A94AD' }}>
              จ่ายไป {ownedExpenses.length} รายการ
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 20, fontWeight: 600, color: '#3E465B' }}>
              {totalPaid.toLocaleString()} ฿
            </span>
            {isExpanded ? <ChevronUp className="w-5 h-5 text-[#3E465B]" /> : <ChevronDown className="w-5 h-5 text-[#3E465B]" />}
          </div>
          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#8A94AD' }}>
            ได้รับคืนแล้ว {totalReceived.toLocaleString()} ฿
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="flex flex-col border-t border-dashed border-[#E3E6ED]">
          {ownedExpenses.map((expense, idx) => (
            <div key={expense.id} className="relative py-4 pl-3 pr-3">
              {/* Blue strip border on the left */}
              <div className="absolute left-0 top-4 h-12 w-[4px] bg-[#00A3FF] rounded-r-[4px]"></div>
              
              <div className="pl-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 16, fontWeight: 600, color: '#525B75' }}>
                      {expense.name}
                    </span>
                    {expense.category && (
                      <div className="flex items-center gap-1 bg-[#F5F7FA] px-2 py-[2px] rounded-[6px]">
                        <Tag className="w-3 h-3 text-[#525B75]" />
                        <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 600, color: '#525B75' }}>
                          {expense.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 18, fontWeight: 600, color: '#3E465B' }}>
                    {expense.totalAmount.toLocaleString()} ฿
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#8A94AD' }}>ผู้ร่วมบิล</span>
                  <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 600, color: '#8A94AD' }}>{expense.splitAmong.length} คน</span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  {[...expense.splitAmong].sort((a, b) => a === person.id ? -1 : b === person.id ? 1 : 0).map(pid => {
                    const splitPerson = people.find(p => p.id === pid);
                    if (!splitPerson) return null;
                    
                    let statusEl;
                    if (pid === person.id) {
                      statusEl = (
                        <div className="flex items-center justify-start gap-1">
                          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 600, color: '#8A94AD' }}>เจ้าของบิล 👑</span>
                        </div>
                      );
                    } else {
                      const hasPaid = expenses.some(r => isExpenseRepayment(r) && r.repaymentFor === expense.id && r.paidBy === pid && r.splitAmong.includes(person.id));
                      if (hasPaid) {
                        statusEl = (
                          <div className="flex items-center justify-center gap-1 bg-[#EAF7E8] px-[6px] py-[2px] rounded-full w-fit">
                            <CheckCircle2 className="w-[12px] h-[12px]" color="white" fill="#25B003" />
                            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 700, color: '#25B003' }}>จ่ายแล้ว</span>
                          </div>
                        );
                      } else {
                        statusEl = (
                          <div className="flex items-center justify-center gap-1 bg-[#F5F7FA] px-[6px] py-[2px] rounded-full w-fit">
                            <Clock className="w-[12px] h-[12px]" color="#525B75" />
                            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 12, fontWeight: 700, color: '#525B75' }}>รอก่อนนะ</span>
                          </div>
                        );
                      }
                    }

                    return (
                      <div key={pid} className="grid grid-cols-[1fr_80px_60px] gap-2 items-center">
                        <div className="flex items-center gap-2 max-w-full overflow-hidden">
                          {splitPerson.avatar ? (
                            <img src={splitPerson.avatar} alt={splitPerson.name} className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                              <User className="w-3 h-3 text-gray-500" />
                            </div>
                          )}
                          <span className="truncate" style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, color: '#3E465B' }}>{splitPerson.name}</span>
                        </div>
                        <div className="flex justify-center items-center">
                          {statusEl}
                        </div>
                        <div className="text-right">
                          <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 600, color: '#8A94AD' }}>
                            {expense.amountPerPerson.toLocaleString()} ฿
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {idx < ownedExpenses.length - 1 && (
                <div style={{ borderBottom: '1px dashed #F5F7FA', marginTop: 16, marginLeft: 8 }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Expense component ────────────────────────────────────────────────────
export function Expense() {
  const { tripData, deleteExpense, getExpensesByPerson, getTotalPaidByPerson } = useTripContext();
  const [activeTab, setActiveTab] = useState<'summary' | 'byPerson'>('summary');
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [selectedExpenseId, setSelectedExpenseId] = useState<string | null>(null);

  const normalExpenses = tripData.expenses.filter(e => !isExpenseRepayment(e));
  const total = normalExpenses.reduce((s, e) => s + e.totalAmount, 0);
  const perPerson = tripData.people.length > 0 ? total / tripData.people.length : 0;

  const expensesByCategory = normalExpenses.reduce((acc, expense) => {
    const cat = expense.category || 'อื่นๆ';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(expense);
    return acc;
  }, {} as Record<string, ExpenseType[]>);

  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-family-primary)' }}
    >
      {/* ── Header Card ──────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'white',
          height: 120,
          boxShadow: '0px 1px 3px 0px rgba(16,24,40,0.1), 0px -1px 2px 0px rgba(16,24,40,0.06)',
          borderRadius: '0 0 16px 16px',
        }}
      >
        {/* Decorative circles (top right) */}
        <div
          className="absolute rounded-full"
          style={{
            width: 160,
            height: 160,
            background: '#D01C1B',
            opacity: 0.2,
            right: -40,
            top: -32,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 96,
            height: 96,
            background: '#D01C1B',
            opacity: 0.1,
            right: 120,
            top: 100,
          }}
        />
        {/* Title + Date */}
        <div className="absolute left-4 bottom-6 flex flex-col gap-2">
          <span
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#3E465B',
              lineHeight: 1.5,
            }}
          >
            Expense
          </span>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 13.5 14.83" fill="none">
              <path d={svgPaths.p3adf0740} stroke="#334155" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--text-label)',
                fontWeight: 'var(--font-weight-regular)',
                color: '#3E465B',
                lineHeight: 1.5,
              }}
            >
              {formatHeaderDate(new Date(tripData.startDate))}
            </span>
          </div>
        </div>
      </div>

      {/* ── Tab Bar (frosted glass) ───────────────────────────────────────────── */}
      <div className="px-3 pt-4 pb-1">
        <div
          className="relative flex items-center rounded-[296px] p-1"
          style={{
            background: 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0px 8px 40px 0px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {(['summary', 'byPerson'] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedPerson(null); }}
                className="flex-1 flex items-center justify-center rounded-[100px] transition-all"
                style={{
                  height: 38,
                  background: isActive ? '#EDEDED' : 'transparent',
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 16,
                  fontWeight: 'var(--font-weight-semibold)',
                  color: isActive ? 'var(--primary)' : '#1A1A1A',
                  lineHeight: 1.4,
                  border: 'none',
                }}
              >
                {tab === 'summary' ? 'ภาพรวม' : 'รายบุคคล'}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-2 pt-3 pb-8 flex flex-col gap-3">

        {/* ── ภาพรวม Tab ───────────────────────────────────────────────────────── */}
        {activeTab === 'summary' && (
          <div className="flex flex-col gap-4">
            {/* Summary card */}
            <SummaryCard
              total={total}
              perPerson={perPerson}
              people={tripData.people}
            />

            {/* Section heading */}
            {tripData.expenses.length > 0 && (
              <div className="flex items-center gap-2 mt-2 mb-1">
                <div
                  style={{
                    width: 4,
                    height: 16,
                    background: '#FF6600',
                    borderRadius: '0 4px 4px 0',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#525B75',
                    lineHeight: 1.5,
                  }}
                >
                  รายการทั้งหมด
                </span>
              </div>
            )}

            {/* Expense Cards */}
            {normalExpenses.map((expense) => (
              <ExpenseAccordionCard
                key={expense.id}
                expense={expense}
                people={tripData.people}
                allExpenses={tripData.expenses}
                isExpanded={selectedExpenseId === expense.id}
                onToggle={() => setSelectedExpenseId(selectedExpenseId === expense.id ? null : expense.id)}
                onDelete={() => deleteExpense(expense.id)}
              />
            ))}

            {tripData.expenses.length === 0 && (
              <div
                className="flex flex-col items-center justify-center py-16 rounded-[8px]"
                style={{ background: 'white' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 'var(--text-base)',
                    color: '#8A94AD',
                    margin: 0,
                  }}
                >
                  ยังไม่มีค่าใช้จ่าย
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 'var(--text-label)',
                    color: '#8A94AD',
                    margin: '4px 0 0',
                  }}
                >
                  กดปุ่ม + เพื่อเพิ่มค่าใช้จ่าย
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── รายบุคคล Tab ─────────────────────────────────────────────────────── */}
        {activeTab === 'byPerson' && (
          <div className="flex flex-col">
            {tripData.people.map((person) => (
              <PersonAccordionCard
                key={person.id}
                person={person}
                people={tripData.people}
                expenses={tripData.expenses}
                isExpanded={selectedPerson === person.id}
                onToggle={() => setSelectedPerson(selectedPerson === person.id ? null : person.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

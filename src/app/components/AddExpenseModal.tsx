import { useState, useEffect } from 'react';
import { useTripContext } from '../context/TripContext';
import { X, Check } from 'lucide-react';

interface AddExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { value: 'อาหาร',        emoji: '🍕' },
  { value: 'คาเฟ่/ขนมหวาน', emoji: '☕' },
  { value: 'เดินทาง',      emoji: '✈️' },
  { value: 'ที่พัก',       emoji: '🏢' },
  { value: 'บัตรเข้าชม',   emoji: '🎫' },
  { value: 'ช้อปปิ้ง',     emoji: '🛍️' },
  { value: 'อื่นๆ',        emoji: '📦' },
];

/** Colour palette for people who have no avatar */
const AVATAR_COLORS = ['#E36414', '#18A0FB', '#25B003', '#E03E1A', '#795DAE', '#F5A623'];

function PersonAvatar({ name, avatarUrl, colorIndex = 0, size = 52 }: { name: string; avatarUrl?: string; colorIndex?: number; size?: number }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        background: avatarUrl ? 'transparent' : AVATAR_COLORS[colorIndex],
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {avatarUrl
        ? <img src={avatarUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span style={{ color: 'white', fontWeight: 700, fontSize: size * 0.38 }}>{initial}</span>}
    </div>
  );
}

export function AddExpenseModal({ isOpen, onClose }: AddExpenseModalProps) {
  const { tripData, addExpense } = useTripContext();
  const [name, setName]           = useState('');
  const [amount, setAmount]       = useState('');
  const [category, setCategory]   = useState('อื่นๆ');
  const [selected, setSelected]   = useState<Set<string>>(
    new Set(tripData.people.map((p) => p.id))
  );
  
  const [isRepayment, setIsRepayment] = useState(false);
  const [selectedBuddyId, setSelectedBuddyId] = useState('');
  const [selectedRefundItemId, setSelectedRefundItemId] = useState('');

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const togglePerson = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) { if (next.size > 1) next.delete(id); }
    else next.add(id);
    setSelected(next);
  };

  const reset = () => {
    setName(''); setAmount(''); setCategory('อื่นๆ');
    setSelected(new Set(tripData.people.map((p) => p.id)));
    setIsRepayment(false);
    setSelectedBuddyId('');
    setSelectedRefundItemId('');
  };

  const handleSubmit = () => {
    const currentUser = tripData.people[0];

    if (isRepayment) {
      if (!selectedBuddyId || !selectedRefundItemId) {
        alert('กรุณาเลือกบัดดี้และรายการที่ต้องการคืนเงิน');
        return;
      }
      const itemToRefund = tripData.expenses.find(e => e.id === selectedRefundItemId);
      if (!itemToRefund) return;
      
      addExpense({
        name: `คืนเงิน - ${itemToRefund.name}`,
        totalAmount: itemToRefund.amountPerPerson,
        paidBy: currentUser.id,
        splitAmong: [selectedBuddyId],
        amountPerPerson: itemToRefund.amountPerPerson,
        date: new Date().toISOString().split('T')[0],
        category: 'อื่นๆ',
        isRepayment: true,
        repaymentFor: itemToRefund.id,
      });
      reset(); onClose();
      return;
    }

    const total = parseFloat(amount);
    if (!name.trim() || isNaN(total) || total <= 0) return;
    const splitAmong = Array.from(selected);
    addExpense({
      name: name.trim(),
      totalAmount: total,
      paidBy: currentUser.id,
      splitAmong,
      amountPerPerson: total / splitAmong.length,
      date: new Date().toISOString().split('T')[0],
      category,
    });
    reset(); onClose();
  };

  const handleCancel = () => { reset(); onClose(); };

  if (!isOpen) return null;

  const currentUser = tripData.people[0];
  const refundBuddies = tripData.people.filter(p => p.id !== currentUser.id);
  const refundItems = tripData.expenses.filter(e => e.paidBy === selectedBuddyId && e.splitAmong.includes(currentUser.id));

  const totalAmt = isRepayment 
    ? (tripData.expenses.find(e => e.id === selectedRefundItemId)?.totalAmount || 0)
    : (parseFloat(amount) || 0);

  const summarySplitPeopleIds = isRepayment
    ? (tripData.expenses.find(e => e.id === selectedRefundItemId)?.splitAmong || [])
    : Array.from(selected);

  const perPerson = isRepayment
    ? (tripData.expenses.find(e => e.id === selectedRefundItemId)?.amountPerPerson || 0)
    : (summarySplitPeopleIds.length > 0 ? totalAmt / summarySplitPeopleIds.length : 0);

  const canSave = isRepayment
    ? (selectedBuddyId !== '' && selectedRefundItemId !== '')
    : (name.trim() && totalAmt > 0);

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--text-label)',
    fontWeight: 700,
    color: 'var(--primary)',
    display: 'flex', alignItems: 'center', gap: 4,
    marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid #EBEBEB',
    background: 'white',
    color: 'var(--foreground)',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-family-primary)',
    fontWeight: 500,
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[60]"
      style={{ background: 'rgba(0,0,0,0.40)' }}
      onClick={handleCancel}
    >
      {/* Bottom sheet */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-y-auto animate-slide-up flex flex-col"
        style={{
          background: 'white',
          borderRadius: '24px 24px 0 0',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
          maxHeight: '94vh',
          boxSizing: 'border-box',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header content inside fixed top area if desired, or inline */}
        <div className="flex flex-col px-5 pt-6 pb-2 relative">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 24, fontWeight: 800, color: '#31384F', margin: 0, lineHeight: 1.2,
              }}>
                บันทึกค่าใช้จ่าย
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 15, fontWeight: 500,
                color: '#8A94AD', margin: '4px 0 0',
              }}>
                บันทึกค่าใช้จ่ายหรือคืนเงินบัดดี้
              </p>
            </div>
            <button
              onClick={handleCancel}
              style={{
                width: 32, height: 32,
                background: 'transparent', border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
              }}
              aria-label="ปิด"
            >
              <X style={{ width: 24, height: 24, color: '#31384F' }} strokeWidth={2} />
            </button>
          </div>

          {/* Toggle switch */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              type="button"
              onClick={() => setIsRepayment(!isRepayment)}
              style={{
                width: 44, height: 24, borderRadius: 100,
                background: isRepayment ? 'var(--primary)' : '#EAEAEA',
                position: 'relative', border: 'none', cursor: 'pointer', transition: '0.2s',
                padding: 0
              }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: '50%', background: 'white',
                position: 'absolute', top: 2, left: isRepayment ? 22 : 2, transition: '0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} />
            </button>
            <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 16, fontWeight: 600, color: '#525B75' }}>
              คืนเงินบัดดี้
            </span>
          </div>
        </div>

        {/* Form body */}
        <div style={{ padding: '16px 20px 0', flex: 1 }}>

          {!isRepayment ? (
            <>
              {/* ชื่อรายการ */}
              <div style={{ marginBottom: 20 }}>
                <div style={labelStyle}>
                  <span>ชื่อรายการ *</span>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="รายละเอียด"
                  style={inputStyle}
                />
              </div>

              {/* จำนวนเงิน */}
              <div style={{ marginBottom: 20 }}>
                <div style={labelStyle}>
                  <span>จำนวนเงิน *</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="กรอกจำนวน"
                    step="0.01"
                    style={{ ...inputStyle, paddingRight: 44, color: '#31384F', fontWeight: 600 }}
                  />
                  <span style={{
                    position: 'absolute', right: 16, top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: 20, fontWeight: 800, color: '#8A94AD',
                  }}>
                    ฿
                  </span>
                </div>
              </div>

              {/* หมวดหมู่ */}
              <div style={{ marginBottom: 20 }}>
                <div style={labelStyle}>
                  <span>หมวดหมู่ *</span>
                </div>
                <div style={{ 
                  display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, 
                  scrollbarWidth: 'none', msOverflowStyle: 'none'
                }}>
                  {categories.map((cat) => {
                    const active = category === cat.value;
                    return (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => setCategory(cat.value)}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          padding: '8px 16px',
                          borderRadius: 100,
                          background: active ? 'var(--primary)' : '#F5F7FA',
                          color: active ? 'white' : '#525B75',
                          fontFamily: 'var(--font-family-primary)',
                          fontSize: 16,
                          fontWeight: active ? 700 : 500,
                          border: 'none', cursor: 'pointer',
                          transition: 'all 0.15s',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        <span style={{ fontSize: 16 }}>{cat.emoji}</span>
                        {cat.value}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ผู้ร่วมบิล */}
              <div style={{ marginBottom: 20 }}>
                <div style={labelStyle}>
                  <span>ผู้ร่วมบิล *</span>
                </div>
                <div style={{ 
                  display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8,
                  scrollbarWidth: 'none', msOverflowStyle: 'none'
                }}>
                  {[...tripData.people].sort((a, b) => a.id === currentUser.id ? -1 : b.id === currentUser.id ? 1 : 0).map((person, idx) => {
                    const isSelected = selected.has(person.id);
                    const isPayer = person.id === currentUser.id;

                    return (
                      <button
                        key={person.id}
                        type="button"
                        onClick={() => togglePerson(person.id)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '4px 12px 4px 4px',
                          borderRadius: 100,
                          background: isSelected ? 'var(--primary)' : '#F5F7FA',
                          border: 'none', cursor: 'pointer',
                          transition: 'all 0.15s',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        <div style={{ position: 'relative' }}>
                          <PersonAvatar name={person.name} avatarUrl={person.avatar} colorIndex={idx % AVATAR_COLORS.length} size={30} />
                          {isPayer && (
                            <div style={{ 
                              position: 'absolute', top: -6, left: -4, fontSize: 16 
                            }}>👑</div>
                          )}
                        </div>
                        <span style={{
                          fontFamily: 'var(--font-family-primary)',
                          fontSize: 15, fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? 'white' : '#31384F',
                        }}>
                          {person.name}
                        </span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-white ml-1" strokeWidth={3} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Repayment Form */}
              <div style={{ marginBottom: 20 }}>
                <div style={labelStyle}>
                  <span>บัดดี้ที่จะคืนเงิน *</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedBuddyId}
                    onChange={(e) => { setSelectedBuddyId(e.target.value); setSelectedRefundItemId(''); }}
                    style={{ ...inputStyle, appearance: 'none', color: selectedBuddyId ? '#31384F' : '#8A94AD' }}
                  >
                    <option value="" disabled>เลือก</option>
                    {refundBuddies.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                  <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="#525B75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <div style={labelStyle}>
                  <span>รายการที่จะคืน *</span>
                </div>
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedRefundItemId}
                    onChange={(e) => setSelectedRefundItemId(e.target.value)}
                    disabled={!selectedBuddyId}
                    style={{ ...inputStyle, appearance: 'none', opacity: selectedBuddyId ? 1 : 0.6, color: selectedRefundItemId ? '#31384F' : '#8A94AD' }}
                  >
                    <option value="" disabled>เลือก</option>
                    {refundItems.length === 0 && selectedBuddyId && <option value="" disabled>ไม่มีรายการค้างชำระ</option>}
                    {refundItems.map(item => <option key={item.id} value={item.id}>{item.name} ({item.amountPerPerson.toLocaleString()} ฿)</option>)}
                  </select>
                  <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: selectedBuddyId ? 1 : 0.6 }}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L7 7L13 1" stroke="#525B75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {!selectedBuddyId && (
                  <p style={{ fontSize: 15, color: '#8A94AD', marginTop: 8, fontFamily: 'var(--font-family-primary)' }}>
                    โปรดเลือก "บัดดี้ที่จะคืนเงิน" ก่อน
                  </p>
                )}
              </div>
            </>
          )}

          {/* Summary card */}
          <div style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #F2F2F2',
            padding: '20px',
            marginBottom: 24,
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
          }}>
            {/* Row 1: Yod Ruam */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 17, fontWeight: 500, color: '#8A94AD', fontFamily: 'var(--font-family-primary)' }}>
                ยอดรวม
              </span>
              <span style={{ fontSize: 26, fontWeight: 800, color: '#31384F', fontFamily: 'var(--font-family-primary)', lineHeight: 1 }}>
                ฿{totalAmt > 0 ? totalAmt.toLocaleString() : '0'}
              </span>
            </div>

            {/* Row 2: Header Split */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#8A94AD', fontFamily: 'var(--font-family-primary)' }}>
                ผู้ร่วมบิล
              </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#31384F', fontFamily: 'var(--font-family-primary)' }}>
                {summarySplitPeopleIds.length} คน
              </span>
            </div>

            {/* Selected People Iteration */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
              {summarySplitPeopleIds.length > 0 && [...summarySplitPeopleIds].sort((a, b) => a === currentUser.id ? -1 : b === currentUser.id ? 1 : 0).map(id => {
                const p = tripData.people.find(x => x.id === id);
                if (!p) return null;
                const isOwner = isRepayment ? false : (p.id === currentUser.id);
                return (
                  <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    <div className="flex items-center gap-2">
                       <PersonAvatar name={p.name} avatarUrl={p.avatar} colorIndex={tripData.people.indexOf(p) % AVATAR_COLORS.length} size={24} />
                       <span style={{ fontSize: 16, fontWeight: 600, color: '#31384F', fontFamily: 'var(--font-family-primary)' }}>{p.name}</span>
                    </div>
                    
                    {isOwner && (
                      <div className="flex items-center justify-center gap-1 mx-2">
                        <span style={{ fontFamily: 'var(--font-family-primary)', fontSize: 14, fontWeight: 700, color: '#8A94AD' }}>เจ้าของบิล 👑</span>
                      </div>
                    )}
                    
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#8A94AD', fontFamily: 'var(--font-family-primary)' }}>
                      {perPerson > 0 ? perPerson.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'} ฿
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Divider & Per Person */}
            <div style={{ borderTop: '1px dashed #E3E6ED', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 17, fontWeight: 500, color: '#8A94AD', fontFamily: 'var(--font-family-primary)' }}>
                ต่อคน
              </span>
              <span style={{ fontSize: 28, fontWeight: 800, color: '#31384F', fontFamily: 'var(--font-family-primary)', lineHeight: 1 }}>
                {perPerson > 0 ? perPerson.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0'} ฿
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex', gap: 12,
          padding: '0 20px',
          paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
        }}>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              flex: 1, height: 52,
              borderRadius: 100,
              background: 'white',
              border: '1.5px solid var(--primary)',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 700,
              color: 'var(--primary)',
              cursor: 'pointer',
            }}
          >
            ยกเลิก
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              flex: 1, height: 52,
              borderRadius: 100,
              background: canSave ? 'var(--primary)' : '#D0D0D0',
              border: 'none',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 700,
              color: canSave ? 'white' : '#9E9E9E',
              cursor: canSave ? 'pointer' : 'default',
              transition: 'background 0.2s',
            }}
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

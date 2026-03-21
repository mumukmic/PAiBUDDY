import { useState, useEffect } from 'react';
import { 
  CheckSquare, Check, CloudRain, Sun, Cloud, CloudSun, 
  MapPin, Thermometer, Droplets, BatteryCharging, Zap, 
  Banknote, CreditCard, Umbrella, Pill, Book, Shirt, Calendar, Plus, X,
  Ticket, Coffee, Droplet, Package, Trash2
} from 'lucide-react';

const MODAL_CATEGORIES = [
  { id: 'travel', label: 'การเดินทาง', icon: CreditCard },
  { id: 'money', label: 'เงิน/บัตรเครดิต', icon: Banknote },
  { id: 'charge', label: 'อุปกรณ์ชาร์จ', icon: Zap },
  { id: 'ticket', label: 'บัตรเข้าชม/เดินทาง', icon: Ticket },
  { id: 'meds', label: 'ยาสามัญ', icon: Pill },
  { id: 'snack', label: 'อาหารว่าง', icon: Coffee },
  { id: 'drink', label: 'เครื่องดื่ม', icon: Droplet },
  { id: 'other', label: 'อื่นๆ', icon: Package },
];

const WEATHER_DATA = [
  { day: 'Sun',        date: 'Mar 22', icon: '☀️', desc: 'แดดจัด',       temp: '19–25℃', rain: '10 %' },
  { day: 'Mon',        date: 'Mar 23', icon: '⛅', desc: 'เมฆบางส่วน',      temp: '19–28℃', rain: '10 %' },
  { day: 'Tue',        date: 'Mar 24', icon: '🌦️', desc: 'ฝนปรอยๆ',  temp: '20–26℃', rain: '35 %' },
  { day: 'Wed',        date: 'Mar 25', icon: '☁️', desc: 'มีเมฆมาก',      temp: '20–27℃', rain: '20 %' },
];

const INITIAL_CHECKLIST = [
  { id: '1', text: 'พาสปอร์ต (อายุเหลือ > 6 เดือน)', icon: Book, checked: false },
  { id: '2', text: 'บัตรประชาชนประจำตัว', icon: CreditCard, checked: false },
  { id: '3', text: 'เงินสดฮ่องกง (HKD)', icon: Banknote, checked: false },
  { id: '4', text: 'บัตร Octopus / YouTrip / Boarding Pass', icon: CreditCard, checked: false },
  { id: '5', text: 'หัวแปลงปลั๊กไฟ (Universal Adapter)', icon: Zap, checked: false },
  { id: '6', text: 'พาวเวอร์แบงค์ (Powerbank) & สายชาร์จ', icon: BatteryCharging, checked: false },
  { id: '7', text: 'ร่มพับ / เสื้อกันฝน (ตามพยากรณ์อากาศ)', icon: Umbrella, checked: false },
  { id: '8', text: 'ยาสามัญประจำบ้าน / ยาประจำตัว', icon: Pill, checked: false },
  { id: '9', text: 'เสื้อผ้าเข้าธีม (เช็ค Ref หน้า Activity)', icon: Shirt, checked: false },
];

export function Overall() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItemText, setNewItemText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('other');

  const [checklist, setChecklist] = useState(() => {
    const saved = localStorage.getItem('trip-planner-checklist');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object' && 'text' in parsed[0]) {
            // New format: parsed is an array of custom and pre-defined items
            return parsed;
        } else {
            // Old format: parsed was just a dictionary of ID -> boolean
            return INITIAL_CHECKLIST.map(item => ({
              ...item,
              checked: parsed[item.id] ?? false
            }));
        }
      } catch {
        return INITIAL_CHECKLIST;
      }
    }
    return INITIAL_CHECKLIST;
  });

  useEffect(() => {
    // Save the entire array structure now so custom items are kept
    localStorage.setItem('trip-planner-checklist', JSON.stringify(checklist));
  }, [checklist]);

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const deleteItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setChecklist(prev => prev.filter(item => item.id !== id));
  };

  const handleAddItem = () => {
    if (!newItemText.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      text: newItemText.trim(),
      categoryId: selectedCategory, // String reference for localstorage safety
      checked: false
    };
    setChecklist(prev => [newItem, ...prev]);
    setNewItemText('');
    setSelectedCategory('other');
    setIsAddModalOpen(false);
  };

  const completedCount = checklist.filter(i => i.checked).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', fontFamily: 'var(--font-family-primary)' }}>
      {/* ── Header Card ──────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden sticky top-0 z-10"
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
        <div className="absolute left-4 bottom-5 flex flex-col gap-2">
          <span
            style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: '20px',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#3E465B',
              lineHeight: 1.5,
            }}
          >
            สิ่งที่ต้องเตรียมก่อนเดินทาง
          </span>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#334155" strokeWidth="1.5" />
              <line x1="2" y1="6.5" x2="14" y2="6.5" stroke="#334155" strokeWidth="1.5" />
              <line x1="5.5" y1="1.5" x2="5.5" y2="4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="10.5" y1="1.5" x2="10.5" y2="4" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
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
              อาทิตย์ที่ 22 มีนาคม 2026
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 pt-5 pb-8 space-y-6">
        
        {/* ── Weather Widget ── */}
        <div 
          className="rounded-[24px] overflow-hidden p-5"
          style={{ background: '#EEF4FA', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-[#3E465B]">
              <MapPin className="w-5 h-5" strokeWidth={2.5}/>
              <span style={{ fontSize: '20px', fontWeight: 800 }}>ฮ่องกง</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#525B75]">
              <Calendar className="w-4 h-4" strokeWidth={2}/>
              <span style={{ fontSize: '16px', fontWeight: 600 }}>22 - 25 มีนาคม 2026</span>
            </div>
          </div>
          
          <div className="flex justify-between items-stretch gap-3 overflow-x-auto hide-scrollbar -mx-2 px-2 pb-1">
            {WEATHER_DATA.map((day, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center flex-1 min-w-[85px] bg-white rounded-[20px] py-4 px-2"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
              >
                <span style={{ fontSize: '16px', color: '#525B75', fontWeight: 500, marginBottom: '8px' }}>{day.day}</span>
                <span style={{ fontSize: '15px', color: '#525B75', fontWeight: 400, marginBottom: '16px' }}>{day.date}</span>
                <span style={{ fontSize: '34px', lineHeight: 1, marginBottom: '16px' }}>{day.icon}</span>
                <span style={{ fontSize: '15px', color: '#3E465B', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>{day.desc}</span>
                <span style={{ fontSize: '16px', color: '#525B75', fontWeight: 400, marginBottom: '10px' }}>{day.temp}</span>
                <div className="flex items-center gap-1 text-[#525B75]">
                  <Droplets className="w-3.5 h-3.5" />
                  <span style={{ fontSize: '16px', fontWeight: 500 }}>{day.rain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Checklist ── */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div style={{ width: 4, height: 18, background: 'var(--primary)', borderRadius: '4px' }} />
              <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--font-weight-bold)', color: 'var(--foreground)' }}>
                เช็คลิสต์ของที่ต้องเตรียม
              </h3>
            </div>
            <span style={{ fontSize: 'var(--text-label)', fontWeight: 600, color: progressPercent === 100 ? '#25B003' : 'var(--muted-foreground)' }}>
              {completedCount}/{checklist.length}
            </span>
          </div>

          <div 
            className="w-full h-2 rounded-full overflow-hidden" 
            style={{ background: '#F0F2F5' }}
          >
            <div 
              className="h-full transition-all duration-500 ease-out" 
              style={{ 
                width: `${progressPercent}%`, 
                background: progressPercent === 100 ? '#25B003' : 'var(--primary)' 
              }} 
            />
          </div>

          <div 
            className="bg-white rounded-[16px] overflow-hidden"
            style={{ 
              boxShadow: '0 4px 12px rgba(16,24,40,0.04)',
              border: '1px solid #F0F2F5'
            }}
          >
            {checklist.map((item, index) => {
              const defaultItem = INITIAL_CHECKLIST.find(i => i.id === item.id);
              let Icon = CheckSquare;
              if (defaultItem) {
                Icon = defaultItem.icon;
              } else if (item.categoryId) {
                const matchedCat = MODAL_CATEGORIES.find(c => c.id === item.categoryId);
                if (matchedCat) Icon = matchedCat.icon;
              }
              
              return (
                <div
                  key={item.id}
                  className="w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50 bg-white"
                  style={{ borderBottom: index < checklist.length - 1 ? '1px solid #F5F7FA' : 'none' }}
                >
                  <div 
                    className="flex items-center gap-3 text-left flex-1 cursor-pointer"
                    onClick={() => toggleCheck(item.id)}
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex justify-center items-center flex-shrink-0 transition-colors"
                      style={{ 
                        background: item.checked ? '#F4FBF2' : '#F5F7FA',
                        color: item.checked ? '#25B003' : '#8A94A6'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span 
                      style={{ 
                        fontSize: '16px', 
                        fontWeight: item.checked ? 500 : 700,
                        color: item.checked ? '#8A94A6' : '#1E2130',
                        textDecoration: item.checked ? 'line-through' : 'none',
                        transition: 'all 0.2s'
                      }}
                    >
                      {item.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 pl-3">
                    <button 
                      onClick={(e) => deleteItem(item.id, e)}
                      className="text-[#8A94A6] hover:text-[#D01C1B] transition-colors p-1 rounded-full hover:bg-red-50"
                      aria-label="ลบรายการ"
                    >
                      <Trash2 className="w-[18px] h-[18px]" strokeWidth={2} />
                    </button>

                    <div 
                      onClick={() => toggleCheck(item.id)}
                      className="w-[22px] h-[22px] rounded-full flex justify-center items-center flex-shrink-0 cursor-pointer transition-colors"
                      style={{
                        border: item.checked ? 'none' : '2px solid #E3E6ED',
                        background: item.checked ? '#25B003' : 'transparent'
                      }}
                    >
                      {item.checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── Fixed Add Button ── */}
      <div className="fixed bottom-[84px] right-4 z-40">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="w-14 h-14 bg-[#E36414] rounded-full flex items-center justify-center transition-transform active:scale-95"
          style={{ boxShadow: '0 8px 24px rgba(227,100,20,0.3)' }}
        >
          <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Add Item Modal ── */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 backdrop-blur-sm transition-opacity">
          <style>{`
            @keyframes overallSlideUp {
              from { transform: translateY(100%); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
          <div 
            className="w-full bg-white rounded-t-[24px] px-5 pt-6 pb-8"
            style={{ animation: 'overallSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#3E465B', marginBottom: '4px' }}>
                  บันทึกรายการที่ต้องเตรียม
                </h3>
                <p style={{ fontSize: '16px', color: '#8A94A6' }}>มาช่วยกันแชร์ว่าบัดดี้ต้องเตรียมอะไรไปบ้าง</p>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)} 
                className="p-1 rounded-full bg-[#F5F7FA] active:bg-[#E3E6ED] transition-colors"
              >
                <X className="w-6 h-6 text-[#3E465B]" />
              </button>
            </div>
            
            <div className="mt-8 mb-6">
              <label className="block mb-3" style={{ fontSize: '16px', fontWeight: 700, color: '#E36414' }}>
                รายการที่ต้องเตรียม <span style={{ color: '#E36414' }}>*</span>
              </label>
              <textarea
                value={newItemText}
                onChange={(e) => setNewItemText(e.target.value)}
                placeholder="กรอกชื่อรายการ"
                className="w-full rounded-[12px] p-4 focus:outline-none resize-none"
                style={{ 
                  fontSize: '18px', 
                  color: '#3E465B', 
                  minHeight: '80px', 
                  background: '#FFFFFF', 
                  border: '1px solid #E3E6ED',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              />
            </div>

            <div className="mb-8">
              <label className="block mb-3" style={{ fontSize: '16px', fontWeight: 700, color: '#E36414' }}>
                หมวดหมู่ <span style={{ color: '#E36414' }}>*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {MODAL_CATEGORIES.map(cat => {
                  const CatIcon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-[20px] transition-colors"
                      style={{ 
                        background: isSelected ? '#E36414' : '#F4F6F9',
                        color: isSelected ? 'white' : '#525B75',
                        border: isSelected ? '1px solid #E36414' : '1px solid transparent'
                      }}
                    >
                      <CatIcon className="w-4 h-4" />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="flex-1 py-4 rounded-[100px] font-bold text-[18px] transition-colors active:bg-gray-50 bg-white"
                style={{ border: '1px solid #E3E6ED', color: '#E36414' }}
              >
                ยกเลิก
              </button>
              <button 
                onClick={handleAddItem}
                className="flex-1 py-4 rounded-[100px] font-bold text-[18px] transition-transform active:scale-95"
                style={{ background: '#E36414', color: 'white', boxShadow: '0 4px 12px rgba(227,100,20,0.2)' }}
              >
                บันทึก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

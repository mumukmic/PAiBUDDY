import { useState, useEffect, useRef } from 'react';
import { X, CloudUpload, Shirt, Compass, UtensilsCrossed, Coffee, Package } from 'lucide-react';
import { useTripContext } from '../context/TripContext';
import type { ActivityItem } from '../context/TripContext';

interface AddActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Category = ActivityItem['category'];

const categories: { value: Category; label: string; Icon: React.ElementType }[] = [
  { value: 'outfit',     label: 'Outfit',        Icon: Shirt },
  { value: 'activity',  label: 'ตั๋วเข้าชม',        Icon: Compass },
  { value: 'restaurant',label: 'ร้านอาหาร',      Icon: UtensilsCrossed },
  { value: 'cafe',      label: 'คาเฟ่/ขนมหวาน', Icon: Coffee },
  { value: 'other',     label: 'อื่นๆ',           Icon: Package },
];

export function AddActivityModal({ isOpen, onClose }: AddActivityModalProps) {
  const { addActivityItem } = useTripContext();
  const [name, setName]               = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory]       = useState<Category>('outfit');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const reset = () => {
    setName(''); setDescription(''); setCategory('outfit'); setImagePreview(null);
  };

  const handleSave = () => {
    if (!name.trim()) return;
    addActivityItem({
      name: name.trim(),
      description: description.trim(),
      category,
      imageUrl: imagePreview || undefined,
      date: new Date().toISOString().split('T')[0],
    });
    reset(); onClose();
  };

  const handleCancel = () => { reset(); onClose(); };

  if (!isOpen) return null;

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-family-primary)',
    fontSize: 'var(--text-label)',
    fontWeight: 600,
    color: 'var(--primary)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 10,
    border: '1.5px solid #EFF2F6',
    background: 'white',
    color: 'var(--foreground)',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-family-primary)',
    fontWeight: 400,
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    /* Backdrop — covers full screen including navbar */
    <div
      className="fixed inset-0 z-[60]"
      style={{ background: 'rgba(0,0,0,0.40)' }}
      onClick={onClose}
    >
      {/* Bottom sheet panel — slides up from screen bottom, over navbar */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-y-auto animate-slide-up"
        style={{
          background: 'white',
          borderRadius: '16px 16px 0 0',
          padding: '8px 20px 24px',
          boxSizing: 'border-box',
          maxHeight: '92vh',
          boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle bar */}
        <div
          className="mx-auto mb-4 rounded-full"
          style={{ width: 36, height: 4, background: '#E3E6ED' }}
        />
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-1">
          <div>
            <p style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 20,
              fontWeight: 700,
              color: '#1E2130',
              margin: 0,
              lineHeight: 1.4,
            }}>
              เพิ่มกิจกรรม
            </p>
            <p style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-label)',
              fontWeight: 400,
              color: 'var(--muted-foreground)',
              margin: '2px 0 0',
            }}>
              เพิ่มสถานที่หรือชุดที่คุณเตรียมไว้ได้เลย
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center transition-opacity active:opacity-60 flex-shrink-0"
            style={{ width: 28, height: 28, marginTop: 2 }}
            aria-label="ปิด"
          >
            <X className="w-5 h-5" style={{ color: '#525B75' }} strokeWidth={2} />
          </button>
        </div>

        {/* ── ชื่อรายการ ── */}
        <div className="mt-5 mb-4">
          <div className="flex items-center gap-1 mb-2">
            <span style={labelStyle}>ชื่อรายการ</span>
            <span style={{ color: '#D12E34', fontSize: 16 }}>*</span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="กรอกชื่อรายการ"
            style={inputStyle}
          />
        </div>

        {/* ── หมวดหมู่ ── */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            <span style={labelStyle}>หมวดหมู่</span>
            <span style={{ color: '#D12E34', fontSize: 16 }}>*</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(({ value, label, Icon }) => {
              const active = category === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setCategory(value)}
                  className="inline-flex items-center gap-1.5 px-3 py-[6px] rounded-full transition-all active:scale-95"
                  style={{
                    background: active ? 'var(--primary)' : '#EFF2F6',
                    color: active ? '#fff' : '#525B75',
                    fontFamily: 'var(--font-family-primary)',
                    fontSize: 'var(--text-label)',
                    fontWeight: active ? 600 : 400,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Icon style={{ width: 14, height: 14, flexShrink: 0 }} strokeWidth={1.8} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── รูปภาพประกอบ ── */}
        <div className="mb-4">
          <span className="block mb-2" style={labelStyle}>รูปภาพประกอบ</span>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          {imagePreview ? (
            <div className="relative rounded-[10px] overflow-hidden" style={{ height: 130 }}>
              <img src={imagePreview} alt="preview" className="w-full h-full object-cover" />
              <button
                onClick={() => setImagePreview(null)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <X className="w-3 h-3" style={{ color: '#fff' }} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full flex flex-col items-center justify-center gap-2 transition-all active:opacity-70"
              style={{
                border: '1.5px dashed #CBD0DD',
                borderRadius: 10,
                padding: '24px 16px',
                background: 'white',
                cursor: 'pointer',
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: 48, height: 48, background: '#FFF0E6' }}
              >
                <CloudUpload className="w-6 h-6" style={{ color: 'var(--primary)' }} strokeWidth={1.8} />
              </div>
              <div className="text-center">
                <p style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 500,
                  color: '#1E2130',
                  margin: 0,
                  lineHeight: 1.4,
                }}>
                  อัพโหลดไฟล์
                </p>
                <p style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--text-label)',
                  fontWeight: 400,
                  color: '#525B75',
                  margin: 0,
                }}>
                  (ขนาดสูงสุด : 25 MB)
                </p>
              </div>
            </button>
          )}
        </div>

        {/* ── รายละเอียด ── */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-2">
            <span style={labelStyle}>รายละเอียด</span>
          </div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="รายละเอียด"
            rows={3}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: 80,
            }}
          />
        </div>

        {/* ── Action buttons ── */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 flex items-center justify-center rounded-[12px] transition-all active:opacity-70"
            style={{
              height: 52,
              background: 'white',
              border: '1.5px solid #EFF2F6',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: 'var(--primary)',
              cursor: 'pointer',
            }}
          >
            ยกเลิก
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 flex items-center justify-center rounded-[12px] transition-all active:opacity-80"
            style={{
              height: 52,
              background: name.trim() ? 'var(--primary)' : '#EFF2F6',
              border: 'none',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              color: name.trim() ? 'white' : 'var(--muted-foreground)',
              cursor: name.trim() ? 'pointer' : 'default',
            }}
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
}

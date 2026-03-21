import { useState, useRef } from 'react';
import { ImagePlus, Plane } from 'lucide-react';
import { useUser } from '../context/UserContext';

import avatar1 from '../../assets/avatars/avatar1.png';
import avatar2 from '../../assets/avatars/avatar2.png';
import avatar3 from '../../assets/avatars/avatar3.png';
import avatar4 from '../../assets/avatars/avatar4.png';

const PRESET_AVATARS = [avatar1, avatar2, avatar3, avatar4];

export function Onboarding() {
  const { saveProfile } = useUser();
  const [selectedAvatar, setSelectedAvatar] = useState<string>(PRESET_AVATARS[0]);
  const [nickname, setNickname] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedAvatar(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    const trimmed = nickname.trim();
    if (!trimmed) return;
    saveProfile({ nickname: trimmed, avatarUrl: selectedAvatar });
  };

  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{ background: '#F4F4F4', fontFamily: 'var(--font-family-primary)', overflow: 'hidden' }}
    >
      {/* ── Top blob (fixed, top-right) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 200, height: 200,
          borderRadius: '50% 50% 60% 40% / 50% 50% 40% 60%',
          background: '#F5C5B8',
          top: -50, right: -60,
          opacity: 0.85,
        }}
      />

      {/* ── Bottom-left blob ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 160, height: 160,
          borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%',
          background: '#F5C5B8',
          bottom: 80, left: -60,
          opacity: 0.75,
        }}
      />

      {/* ── Logo area (top half) ── */}
      <div className="flex flex-col items-center justify-center" style={{ flex: '1 1 0', paddingTop: 40 }}>
        {/* PAiBUDDY logo */}
        <div className="flex items-center" style={{ gap: 0 }}>
          <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>P</span>
          <Plane
            style={{ width: 30, height: 30, color: 'var(--primary)', transform: 'rotate(-30deg)', margin: '0 1px' }}
            strokeWidth={2.2}
          />
          <span style={{ fontSize: 40, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>iBUDDY</span>
        </div>
      </div>

      {/* ── Bottom card area ── */}
      <div style={{ flex: '0 0 auto', padding: '0 0 0 0' }}>
        {/* White card with rounded top */}
        <div
          style={{
            background: 'white',
            borderRadius: '24px 24px 0 0',
            padding: '28px 20px 24px',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* Card blob (top-right inside card) */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 120, height: 120,
              borderRadius: '50% 50% 60% 40% / 50% 50% 40% 60%',
              background: '#F5C5B8',
              top: -20, right: -20,
              opacity: 0.65,
            }}
          />

          {/* ── Avatar row ── */}
          <div
            className="flex items-center"
            style={{ gap: 10, marginBottom: 10, position: 'relative', zIndex: 1 }}
          >
            {PRESET_AVATARS.map((src) => {
              const isSelected = selectedAvatar === src;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedAvatar(src)}
                  style={{
                    flexShrink: 0,
                    width: 68, height: 68,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: isSelected ? '3px solid var(--primary)' : '3px solid transparent',
                    boxShadow: isSelected ? '0 0 0 2px rgba(227,100,20,0.18)' : 'none',
                    padding: 0,
                    background: 'none',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                >
                  <img src={src} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </button>
              );
            })}

            {/* Upload button */}
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              style={{
                flexShrink: 0,
                width: 56, height: 56,
                borderRadius: '50%',
                background: 'var(--primary)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="อัพโหลดรูปโปรไฟล์"
            >
              <ImagePlus style={{ width: 26, height: 26, color: 'white' }} strokeWidth={2} />
            </button>
          </div>

          {/* Sub-label */}
          <p style={{
            fontSize: 14,
            fontWeight: 400,
            color: '#8A8FA8',
            margin: '0 0 20px 0',
            position: 'relative', zIndex: 1,
          }}>
            เลือกรูปโปรไฟล์หรือเพิ่มรูปโปรไฟล์
          </p>

          {/* ── Nickname input ── */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary)' }}>ชื่อเล่น</span>
              <span style={{ color: '#D12E34', fontSize: 16, lineHeight: 1 }}>*</span>
            </div>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="กรอกชื่อเล่น"
              maxLength={30}
              style={{
                width: '100%',
                padding: '13px 16px',
                borderRadius: 12,
                border: '1.5px solid #EDEDED',
                background: 'white',
                color: '#3E465B',
                fontSize: 17,
                fontFamily: 'var(--font-family-primary)',
                fontWeight: 400,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* ── Spacer inside card ── */}
          <div style={{ height: 32 }} />
        </div>

        {/* ── Submit button — sits right below card, over bottom area ── */}
        <div
          style={{
            background: 'white',
            padding: '0 20px',
            paddingBottom: 'max(32px, env(safe-area-inset-bottom, 32px))',
          }}
        >
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!nickname.trim()}
            style={{
              width: '100%',
              height: 56,
              borderRadius: 100,
              background: nickname.trim() ? 'var(--primary)' : '#D0D0D0',
              border: 'none',
              fontFamily: 'var(--font-family-primary)',
              fontSize: 18,
              fontWeight: 700,
              color: nickname.trim() ? 'white' : '#9E9E9E',
              cursor: nickname.trim() ? 'pointer' : 'default',
              transition: 'background 0.2s',
              letterSpacing: '0.2px',
            }}
          >
            เข้าสู่PAiBUDDY
          </button>
        </div>
      </div>
    </div>
  );
}

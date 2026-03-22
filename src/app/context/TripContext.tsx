import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import somchaiAvatar from '../../assets/avatars/somchai.png';
import somyingAvatar from '../../assets/avatars/somying.png';
import somsakAvatar from '../../assets/avatars/somsak.png';
import somjaiAvatar from '../../assets/avatars/somjai.png';
import { useUser } from './UserContext';


export interface Person {
  id: string;
  name: string;
  avatar?: string;
}

export interface Activity {
  id: string;
  time: string;
  location: string;
  description: string;
  day: number;
  tags?: { label: string; type: 'ticket' | 'water' | 'powerbank' | 'card' | 'cash' | 'other' | 'passport' }[];
}

export interface Outfit {
  id: string;
  day: number;
  dayName: string;
  theme: string;
  imageUrl: string;
}

export interface ActivityItem {
  id: string;
  name: string;
  description: string;
  category: 'outfit' | 'activity' | 'restaurant' | 'cafe' | 'other';
  imageUrl?: string;
  date?: string;
}

export interface Expense {
  id: string;
  name: string;
  totalAmount: number;
  paidBy: string;
  splitAmong: string[];
  amountPerPerson: number;
  date: string;
  category?: string;
  isRepayment?: boolean;
  repaymentFor?: string;
}

export interface TripData {
  tripName: string;
  startDate: Date;
  people: Person[];
  activities: Activity[];
  outfits: Outfit[];
  expenses: Expense[];
  activityItems: ActivityItem[];
}

interface TripContextType {
  tripData: TripData;
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  addActivity: (activity: Omit<Activity, 'id'>) => void;
  addOutfit: (outfit: Omit<Outfit, 'id'>) => void;
  addActivityItem: (item: Omit<ActivityItem, 'id'>) => void;
  updateActivity: (id: string, updates: Partial<Activity>) => void;
  deleteExpense: (id: string) => void;
  getCurrentActivity: () => Activity | null;
  getExpensesByPerson: (personId: string) => Expense[];
  getTotalPaidByPerson: (personId: string) => number;
  shiftActivities: (hours: number) => void;
  shiftDayActivities: (day: number, hours: number) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

const STORAGE_KEY = 'trip-planner-data-hk-v4';

const defaultData: TripData = {
  tripName: 'Hong Kong 2026',
  startDate: new Date('2026-03-22'),
  people: [
    { id: '1', name: 'แม่', avatar: somchaiAvatar },
    { id: '2', name: 'ลูกนัท', avatar: somyingAvatar },
    { id: '3', name: 'มุก', avatar: somsakAvatar },
    { id: '4', name: 'สา', avatar: somjaiAvatar },
  ],
  activities: [
    {
      id: 'hk1',
      day: 1,
      time: '10:30',
      location: 'สนามบินสุวรรณภูมิ',
      description: 'ถึงสนามบินเตรียมตัวเช็คอิน โหลดกระเป๋า',
      tags: [
        { label: 'ตั๋วเครื่องบิน', type: 'ticket' },
        { label: 'พาสปอร์ต', type: 'passport' }
      ],
    },
    {
      id: 'hk2',
      day: 1,
      time: '14:40',
      location: 'สนามบิน HKG',
      description: 'ถึงสนามบิน HKG ผ่าน ตม. และรับกระเป๋า (~60 นาที)',
      tags: [
        { label: 'พาสปอร์ต', type: 'passport' },
        { label: 'ตั๋วเครื่องบิน', type: 'ticket' }
      ],
    },
    {
      id: 'hk3',
      day: 1,
      time: '15:40',
      location: 'Airport Bus Terminal',
      description: 'ออก Arrival Hall ไปจุดขึ้น Bus Terminal เส้นทาง Airport → Tung Chung',
      tags: [{ label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk4',
      day: 1,
      time: '16:00',
      location: 'Citygate Outlets',
      description: 'เดินจากสถานีรถบัสไปฝากกระเป๋าที่ Citygate Outlets',
      tags: [],
    },
    {
      id: 'hk5',
      day: 1,
      time: '16:35',
      location: 'Ngong Ping 360',
      description: 'นั่งกระเช้าขาขึ้นไปนองปิง (Standard / Crystal / Crystal+)',
      tags: [{ label: 'ตั๋วสำหรับเข้าชม', type: 'ticket' }],
    },
    {
      id: 'hk6',
      day: 1,
      time: '17:05',
      location: 'Ngong Ping & Big Buddha',
      description: 'ขึ้นบันไดพระใหญ่ 268 ขั้น, วัดโป่หลิน และ Ngong Ping Village',
      tags: [{ label: 'น้ำดื่ม', type: 'water' }],
    },
    {
      id: 'hk7',
      day: 1,
      time: '18:00',
      location: 'Ngong Ping 360 (ขาลง)',
      description: 'นั่งกระเช้าขาลง (รอบเส้นตาย) และรับกระเป๋าที่ Citygate',
      tags: [],
    },
    {
      id: 'hk8',
      day: 1,
      time: '18:55',
      location: 'Best Western Plus Hotel Kowloon',
      description: 'เดินทางเข้าโรงแรม (Tung Chung -> Lai King -> Prince Edward -> Hung Hom)',
      tags: [{ label: 'ที่พัก', type: 'other' }, { label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk9',
      day: 1,
      time: '20:00',
      location: 'Symphony of Lights',
      description: 'ชมโชว์ที่ Tsim Sha Tsui Promenade / Avenue of Stars',
      tags: [{ label: 'PowerBank', type: 'powerbank' }],
    },
    {
      id: 'hk10',
      day: 1,
      time: '20:30',
      location: 'Master Beef Shabu',
      description: 'มื้อเย็นชาบูเนื้อ Tsim Sha Tsui และต่อด้วย Kai Kai Dessert',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk11',
      day: 2,
      time: '08:30',
      location: 'Log Ye Dim Sum Restaurant',
      description: 'มื้อเช้าติ่มซำที่ Tsim Sha Tsui',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk12',
      day: 2,
      time: '09:30',
      location: 'Nathan Road',
      description: 'เดินถนน Nathan Road ถ่ายรูปป้ายร้านและบรรยากาศ',
      tags: [{ label: 'น้ำดื่ม', type: 'water' }],
    },
    {
      id: 'hk13',
      day: 2,
      time: '10:15',
      location: 'K11 Art Mall',
      description: 'เดินดูงานอาร์ต พักขา และช็อปปิ้ง Sasa / Lung Fung Mall',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk14',
      day: 2,
      time: '12:00',
      location: 'Best Mart 360',
      description: 'ซื้อขนมและของฝากราคาไม่แรงที่ Best Mart 360 สาขา Tsim Sha Tsui',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk15',
      day: 2,
      time: '12:30',
      location: 'Rapidfootwear (Kwun Tong)',
      description: 'นั่ง MTR ไปร้านรองเท้าที่ตึกโรงงาน Kwun Tong (Unit E, ชั้น 2)',
      tags: [{ label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk16',
      day: 2,
      time: '13:30',
      location: 'Harbour City / Promenade',
      description: 'เดินเลียบอ่าว แวะทานเสี่ยวหลงเปาทอด และหมูทอด Wah Heung Yuen',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk17',
      day: 2,
      time: '15:15',
      location: 'Central & Sheung Wan',
      description: 'ข้ามฝั่งไป Central แวะ Vision Bakery, Jenny Bakery และวัด Man Mo',
      tags: [{ label: 'Octopus Card', type: 'card' }, { label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk18',
      day: 2,
      time: '17:15',
      location: 'Kennedy Town',
      description: 'ถ่ายรูปสนามบาสริมทะเล Kennedy Town ช่วงแสงเย็น',
      tags: [{ label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk19',
      day: 2,
      time: '18:00',
      location: 'Yat Lok Restaurant',
      description: 'รับประทานมื้อเย็นเมนูห่านย่าง หมูแดง หรือหมูกรอบ',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk20',
      day: 2,
      time: '18:50',
      location: 'Victoria Peak',
      description: 'ขึ้นรถบัส No.15 ชมวิว และลงด้วย Peak Tram',
      tags: [{ label: 'ตั๋วสำหรับเข้าชม', type: 'ticket' }],
    },
    {
      id: 'hk21',
      day: 2,
      time: '21:30',
      location: 'Star Ferry',
      description: 'นั่งเรือ Star Ferry ข้ามฟากกลับ Tsim Sha Tsui ชมวิวกลางคืน',
      tags: [{ label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk22',
      day: 3,
      time: '08:00',
      location: 'Master Congee',
      description: 'มื้อเช้าโจ๊กฮ่องกงโบราณ ปาท่องโก๋ และก๋วยเตี๋ยวหลอด',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk23',
      day: 3,
      time: '10:00',
      location: 'Hong Kong Disneyland',
      description: 'เที่ยวสวนสนุกเต็มวัน เก็บเครื่องเล่นไฮไลต์และชมพลุ Momentous',
      tags: [
        { label: 'ตั๋วสำหรับเข้าชม', type: 'ticket' },
        { label: 'น้ำดื่ม', type: 'water' },
        { label: 'PowerBank', type: 'powerbank' }
      ],
    },
    {
      id: 'hk24',
      day: 3,
      time: '21:00',
      location: 'Best Western Plus Hotel Kowloon',
      description: 'เดินทางกลับโรงแรม ออกช้า ๆ หลังพลุ คนจะทยอยออก Disneyland → Sunny Bay → เมือง',
      tags: [{ label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk25',
      day: 4,
      time: '07:00',
      location: 'One Dim Sum',
      description: 'มื้อเช้าติ่มซำแถว Jordan / TST',
      tags: [{ label: 'เงินสด', type: 'cash' }],
    },
    {
      id: 'hk26',
      day: 4,
      time: '08:00',
      location: 'ทัวร์ไหว้ 4 วัด',
      description: 'ไหว้พระวัดรีพลัสเบย์, วัดฮองฮำ, วัดหวังต้าเซียน และวัดแชกงหมิว',
      tags: [{ label: 'Octopus Card', type: 'card' }],
    },
    {
      id: 'hk27',
      day: 4,
      time: '16:55',
      location: 'สนามบิน HKG',
      description: 'เดินทางถึงสนามบินและบินกลับกรุงเทพฯ (ถึงเวลา 19:00)',
      tags: [{ label: 'ตั๋วเครื่องบิน', type: 'ticket' }, { label: 'พาสปอร์ต', type: 'passport' }],
    }
  ],
  outfits: [
    {
      id: '1',
      day: 2,
      dayName: 'วันที่ 1',
      theme: 'Casual Travel',
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
    },
    {
      id: '2',
      day: 3,
      dayName: 'วันที่ 2',
      theme: 'Street Fashion Central',
      imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop',
    },
    {
      id: '3',
      day: 4,
      dayName: 'วันที่ 3',
      theme: 'Disney Magic',
      imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
    },
  ],
  expenses: [
    {
      id: 'e1',
      name: 'ตั๋วเครื่องบิน (ไป-กลับ)',
      totalAmount: 18973,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 18973 / 4, // 4743.25
      date: '2026-03-01',
      category: 'เดินทาง',
    },
    {
      id: 'e2',
      name: 'โรงแรม Best Western Plus (3 คืน)',
      totalAmount: 13292.24,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 13292.24 / 4, // 3323.06
      date: '2026-03-01',
      category: 'ที่พัก',
    },
    {
      id: 'e3',
      name: 'Octopus Card (คนละ 396฿)',
      totalAmount: 1584,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 1584 / 4, // 396
      date: '2026-03-22',
      category: 'เดินทาง',
    },
    {
      id: 'e4',
      name: 'Ngong Ping 360 (ผู้ใหญ่ 3, เด็ก 1)',
      totalAmount: 4343,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 4343 / 4,
      date: '2026-03-22',
      category: 'บัตรเข้าชม',
    },
    {
      id: 'e5',
      name: 'Peak Tram',
      totalAmount: 1949,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 1949 / 4,
      date: '2026-03-23',
      category: 'บัตรเข้าชม',
    },
    {
      id: 'e6',
      name: 'Hong Kong Disneyland',
      totalAmount: 13369.78,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 13369.78 / 4,
      date: '2026-03-24',
      category: 'บัตรเข้าชม',
    },
    {
      id: 'e7',
      name: 'ทัวร์ไหว้พระ 4 วัด + ส่งสนามบิน',
      totalAmount: 13020,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 13020 / 4,
      date: '2026-03-25',
      category: 'เดินทาง',
    },
    {
      id: 'e8',
      name: 'ค่าน้ำหนักกระเป๋า โหลดใต้เครื่อง',
      totalAmount: 5355.29,
      paidBy: '1',
      splitAmong: ['1', '2', '3', '4'],
      amountPerPerson: 5355.29 / 4, // 1338.82
      date: '2026-03-01',
      category: 'เดินทาง',
    },
  ],
  activityItems: [],
};

export function TripProvider({ children }: { children: ReactNode }) {
  const { profile } = useUser();

  const [tripData, setTripData] = useState<TripData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const mergedPeople = parsed.people ? parsed.people.map((p: Person) => {
        const defaultPerson = defaultData.people.find((dp) => dp.id === p.id);
        return { ...p, avatar: p.avatar || defaultPerson?.avatar };
      }) : defaultData.people;

      return {
        ...parsed,
        startDate: new Date(parsed.startDate),
        people: mergedPeople,
        activityItems: parsed.activityItems || defaultData.activityItems,
      };
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tripData));
  }, [tripData]);

  const tripDataWithProfile = useMemo(() => {
    if (!profile) return tripData;
    const people = [...tripData.people];
    people[0] = { ...people[0], name: profile.nickname, avatar: profile.avatarUrl };
    return { ...tripData, people };
  }, [tripData, profile]);

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    };
    setTripData((prev) => ({
      ...prev,
      expenses: [...prev.expenses, newExpense],
    }));
  };

  const addActivity = (activity: Omit<Activity, 'id'>) => {
    const newActivity = {
      ...activity,
      id: Date.now().toString(),
    };
    setTripData((prev) => ({
      ...prev,
      activities: [...prev.activities, newActivity],
    }));
  };

  const addOutfit = (outfit: Omit<Outfit, 'id'>) => {
    const newOutfit = {
      ...outfit,
      id: Date.now().toString(),
    };
    setTripData((prev) => ({
      ...prev,
      outfits: [...prev.outfits, newOutfit],
    }));
  };

  const addActivityItem = (item: Omit<ActivityItem, 'id'>) => {
    const newItem = { ...item, id: Date.now().toString() };
    setTripData((prev) => ({ ...prev, activityItems: [...prev.activityItems, newItem] }));
  };

  const updateActivity = (id: string, updates: Partial<Activity>) => {
    setTripData((prev) => ({
      ...prev,
      activities: prev.activities.map((activity) =>
        activity.id === id ? { ...activity, ...updates } : activity
      ),
    }));
  };

  const deleteExpense = (id: string) => {
    setTripData((prev) => ({
      ...prev,
      expenses: prev.expenses.filter((expense) => expense.id !== id),
    }));
  };

  const getCurrentActivity = (): Activity | null => {
    const now = new Date();
    const tripStart = new Date(tripData.startDate);

    // Calculate which day of the trip we're on
    const daysDiff = Math.floor((now.getTime() - tripStart.getTime()) / (1000 * 60 * 60 * 24));
    const currentDay = daysDiff + 1;

    if (currentDay < 1) {
      return null; // Trip hasn't started yet
    }

    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const todayActivities = tripData.activities
      .filter((a) => a.day === currentDay)
      .sort((a, b) => a.time.localeCompare(b.time));

    // Find the current or next activity
    for (let i = 0; i < todayActivities.length; i++) {
      if (currentTime <= todayActivities[i].time) {
        return todayActivities[i];
      }
    }

    // If we're past all activities today, return the last one
    return todayActivities[todayActivities.length - 1] || null;
  };

  const getExpensesByPerson = (personId: string): Expense[] => {
    return tripData.expenses.filter((expense) => expense.paidBy === personId);
  };

  const getTotalPaidByPerson = (personId: string): number => {
    return tripData.expenses
      .filter((expense) => expense.paidBy === personId)
      .reduce((sum, expense) => sum + expense.totalAmount, 0);
  };

  const shiftActivities = (hours: number) => {
    setTripData((prev) => ({
      ...prev,
      activities: prev.activities.map((activity) => {
        const [hour, minute] = activity.time.split(':').map(Number);
        const newHour = (hour + hours + 24) % 24;
        return {
          ...activity,
          time: `${String(newHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
        };
      }),
    }));
  };

  const shiftDayActivities = (day: number, hours: number) => {
    setTripData((prev) => ({
      ...prev,
      activities: prev.activities.map((activity) => {
        if (activity.day !== day) return activity;

        const [hour, minute] = activity.time.split(':').map(Number);
        const newHour = (hour + hours + 24) % 24;
        return {
          ...activity,
          time: `${String(newHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
        };
      }),
    }));
  };

  return (
    <TripContext.Provider
      value={{
        tripData: tripDataWithProfile,
        addExpense,
        addActivity,
        addOutfit,
        addActivityItem,
        updateActivity,
        deleteExpense,
        getCurrentActivity,
        getExpensesByPerson,
        getTotalPaidByPerson,
        shiftActivities,
        shiftDayActivities,
      }}
    >
      {children}
    </TripContext.Provider>
  );
}

export function useTripContext() {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within TripProvider');
  }
  return context;
}

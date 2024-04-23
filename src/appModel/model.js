import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config';
import { useEffect, useState } from 'react';

export const useModel = (collect) => {
    const [data, setData] = useState([]);
    const dbRefTest = collection(db, collect);

    useEffect(() => {
        const unsubscribe = loadRealtime();
        return () => {
            unsubscribe();
        }
    }, [])
    function loadRealtime() {
        const unsubscribe = onSnapshot(dbRefTest, (snapshot) => {
            // เรียกข้อมูลจาก DB มาไว้ในตัวแปร newData เก็บข้อมูลแบบ array
            const newData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
                // ... เป็นการคัดลอก
            }));
            // นำข้อมูลไปเก็บไว้ที่ตัวแปร data
            setData(newData)
        })
        return () => { unsubscribe() }
    }

    return {
        data
    }
}
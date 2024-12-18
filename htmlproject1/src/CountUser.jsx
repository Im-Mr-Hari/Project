import React, { useEffect, useState } from "react";

const App = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        // Lấy số lượt truy cập ban đầu từ localStorage (nếu có)
        const initialCount = localStorage.getItem("visitCount");
        if (initialCount) {
            setVisitCount(parseInt(initialCount));
        } else {
            localStorage.setItem("visitCount", 0);
        }

        // Thiết lập bộ đếm tự động tăng mỗi 10 giây
        const interval = setInterval(() => {
            setVisitCount((prevCount) => {
                const newCount = prevCount + 2;
                localStorage.setItem("visitCount", newCount); // Cập nhật localStorage
                return newCount;
            });
        }, 5000); // 10000ms = 10 giây

        // Xóa interval khi component bị hủy
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: "center", width: "3%", marginTop: "-80px" }}>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
                {visitCount}</p>
        </div>
    );
};

export default App;

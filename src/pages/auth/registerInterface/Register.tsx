import React, { useState } from 'react';
import MyInput from '../../../component/common/Input/MyInput';
import MyButton from '../../../component/common/Button/MyButton';

interface RegisterProps {
    onSwitch: () => void;
}

interface RegisterData {
    user: string;
    pass: string;
    confirm: string;
}

const Register: React.FC<RegisterProps> = ({ onSwitch }) => {
    const [data, setData] = useState<RegisterData>({ user: '', pass: '', confirm: '' });

    return (
    <div className="auth-card">
        <h2>Đăng Ký</h2>

        <MyInput
            label="Tài khoản"
            value={data.user}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, user: e.target.value})}
        />

        <MyInput
            label="Mật khẩu"
            type="password"
            value={data.pass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, pass: e.target.value})}
        />

        <MyInput
            label="Xác nhận mật khẩu"
            type="password"
            value={data.confirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({...data, confirm: e.target.value})}
        />

        <MyButton text="TẠO TÀI KHOẢN" variant="success" fullWidth />

        <p style={{ marginTop: '1rem' }}>
            Đã có tài khoản? <span className="auth-link" onClick={onSwitch}>Đăng nhập</span>
        </p>
    </div>
    );
};

export default Register;
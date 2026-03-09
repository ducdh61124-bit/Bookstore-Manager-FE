import React, { useState } from 'react';
import MyInput from '../../../component/common/Input/MyInput';
import MyButton from '../../../component/common/Button/MyButton';

interface LoginState {
    user: string;
    pass: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginState>{user : '', pass : ''});

    const handleInputChange = (field: keyof LoginState, value: string) => {
        setFormData({ ...formData, [field]: value });
    };
    return (
        <div className="auth-card">
            <h2>Đăng Nhập</h2>
            <MyInput
                label="Tài khoản"
                value={formData.user}
                onChange={(e) => handleInputChange('user', e.target.value)}
            />
            <MyInput
                label="Mật khẩu"
                type="password"
                value={formData.pass}
                onChange={(e) => handleInputChange('pass', e.target.value)}
            />
        <MyButton text="ĐĂNG NHẬP" fullWidth type="submit" />
    </div>
  );
};

export default Login;
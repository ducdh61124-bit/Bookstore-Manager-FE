import React from 'react';
import MyInput from '../../../component/common/Input/MyInput';
import MyButton from '../../../component/common/Button/MyButton';

interface ForgotPasswordProps {
    onBack: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBack }) => {
    const [email, setEmail] = useState<string>('');

    return (
        <div className="auth-card">
            <h2>Quên Mật Khẩu</h2>
            <p>Nhập email để nhận mã khôi phục.</p>
            <MyInput
                label="Email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <MyButton text="GỬI YÊU CẦU" fullWidth />
            <div style={{ marginTop: '1.5rem' }}>
                <span className="auth-link" onClick={onBack}> ← Quay lại Đăng nhập </span>
            </div>
        </div>
    );
};

export default ForgotPassword;
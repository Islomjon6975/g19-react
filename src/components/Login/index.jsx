import React from 'react';
import './style.css';
import { Button, Form, Input, InputNumber } from 'antd';

const Login = () => {
	const onFinish = values => {
		const { phoneNumber, password } = values;

		console.log({ phoneNumber: `+998${phoneNumber}`, password });
	};

	return (
		<div className='wrapper'>
			<h3>Yana bir bor salom!</h3>
			<p>Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.</p>
			<Form
				name='basic'
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				autoComplete='off'>
				<Form.Item
					name='phoneNumber'
					rules={[
						{
							required: true,
							message: 'Username ni kiriting!',
							min: 7,
							max: 7,
						},
					]}>
					<InputNumber addonBefore='+998' value={111} />
				</Form.Item>

				<Form.Item
					name='password'
					rules={[
						{
							required: true,
							message: 'Password ni kiriting!',
						},
					]}>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;

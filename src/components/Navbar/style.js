import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/apna-tv.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
const Wrapper = styled.header`
	width: 100%;
`;

const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	padding: 50px 80px;
	margin: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

Container.Column = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	flex: 1;

	:first-child {
		justify-content: flex-start;
	}

	justify-content: center;

	:last-child {
		justify-content: flex-end;
	}
`;

Container.Column.Ul = styled.ul`
	display: flex;
	align-items: center;
	gap: 20px;
`;

Container.Column.Li = styled.li`
	list-style-type: none;
	font-family: 'Outfit';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 25px;
	letter-spacing: 0.03em;

	color: #ffffff;
`;

Container.Column.Logo = styled(logo)``;

Container.Column.Search = styled(AiOutlineSearch)`
	width: 30px;
	height: 30px;

	fill: white;
`;

Container.Column.Notification = styled(IoIosNotificationsOutline)`
	width: 30px;
	height: 30px;

	fill: white;
`;

export { Wrapper, Container };

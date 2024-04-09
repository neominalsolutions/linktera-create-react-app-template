import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<>
			<div style={{ padding: '20px' }}>
				<nav
					style={{
						position: 'sticky',
						top: 0,
						minWidth: '100wv',
						minHeight: '5rem',
						padding: '1rem',
						backgroundColor: 'lightblue',
						color: 'white',
					}}
				>
					<Link to="/button-demo">Button Demo</Link>{' '}
					<Link to="/todo-demo">Todo Demo</Link>
				</nav>
				<main>
					<Outlet />
				</main>
				<footer
					style={{
						padding: '1rem',
						position: 'fixed',
						bottom: '0',
						minWidth: '100%',
						backgroundColor: 'GrayText',
						minHeight: '5rem',
						textAlign: 'center',
					}}
				>
					All rights reserved
				</footer>
			</div>
		</>
	);
}

export default MainLayout;

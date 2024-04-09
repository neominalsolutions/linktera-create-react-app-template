import './List.css';

// UI Componentler Propslar üzerinden çalışır.

type ListItemProps = {
	children: React.ReactNode;
	OnItemDelete?: (key: number) => void;
	key: number; // Hangi item silindiği için var
};

function ListItem({ children, OnItemDelete, key }: ListItemProps) {
	return (
		<>
			<div className="list-item">
				<div className="flex justify-between flex-row">
					{children}
					<div>
						<button
							style={{
								border: 'none',
								background: 'transparent',
								cursor: 'pointer',
								color: 'red',
							}}
							onClick={() => {
								if (OnItemDelete) {
									OnItemDelete(key);
								}
							}}
						>
							Sil
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ListItem;

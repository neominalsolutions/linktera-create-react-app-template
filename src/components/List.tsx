import ListItem from './ListItem';
import './List.css';
import React from 'react';

type ListProps = {
	items: string[];
	OnItemDelete?: (key: number) => void;
	style?: React.CSSProperties; // componente dışaırdan style geçmek için kullanırız.
};

function List({ items, OnItemDelete, style }: ListProps) {
	console.log('sx', style);

	return (
		<>
			<div className="list" style={style}>
				{items.map((item: string, index: number) => {
					return (
						<ListItem
							key={index}
							OnItemDelete={() => {
								if (OnItemDelete) {
									OnItemDelete(index);
								}
							}}
						>
							{item}
						</ListItem>
					);
				})}
			</div>
		</>
	);
}

export default List;

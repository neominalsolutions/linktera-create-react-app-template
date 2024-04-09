import { useRef, useState } from 'react';
import Button from '../components/Button';
import List from '../components/List';

// Page Componentlerde Props ihtiyaç kalmaz genelde yaygın bir şekilde state kullnılır.
// Page Componentler routing dosyalarından çağırılır
// UI Componentler ise Page Componentler için selector name ile element çağırılır. <Button />

function TodoPage() {
	// fonkisyon içerisinde özel çağırılmış olan fonkisyonlar hook'tur.
	// Hook kavramı func componentlere özgü bir yapı
	// todos güncel state erişmemizi sağlar
	// setTodos ise state değiştirmek için kullanılan method
	const [todos, setTodos] = useState<Array<string>>([]);
	const inputRef = useRef<HTMLInputElement>(null); // Inputa değerini okumak html bir referans tanımı yaptık

	const addItem = () => {
		console.log('add-item', inputRef.current?.value);
		const value = inputRef.current?.value as string;
		setTodos([value, ...todos]); // spread operator ile dizi referansı güncelleme

		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	const deleteItem = (key: number) => {
		todos.splice(key, 1);
		// virtual doma referance type ile çalışırken ilgili referansın güncellenmesini bekler o yüzden array ve object tipi ile çalışırken spread operatörü kullanalım.
		setTodos([...todos]);
	};

	console.log('...rendering');
	return (
		<>
			<div>
				<input
					ref={inputRef}
					style={{ padding: '15px' }}
					placeholder="İtem ekleyiniz"
				/>
				<Button onButtonClick={addItem} variant="outline" color="info">
					Ekle
				</Button>
			</div>

			<List
				style={{ maxWidth: '50%' }}
				items={todos}
				OnItemDelete={deleteItem}
			/>
		</>
	);
}

export default TodoPage;

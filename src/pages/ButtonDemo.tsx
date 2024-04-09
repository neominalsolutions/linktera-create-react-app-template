import Button from '../components/Button';

function ButonDemoPage() {
	return (
		<>
			<div>
				{/* <Button variant="outline" color="success" text="Deneme1" /> */}
				<Button variant="outline" color="success">
					Save
				</Button>
				<Button variant="default" color="warning">
					Warning
				</Button>
				<Button
					onButtonClick={(event: any) => {
						console.log('event', event);
					}}
					variant="link"
					color="danger"
				>
					<p>Danger</p>
				</Button>
			</div>
		</>
	);
}

export default ButonDemoPage;

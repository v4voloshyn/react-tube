import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
	<ContentLoader
		speed={2.5}
		width={'100%'}
		height={'100%'}
		viewBox='0 0 275 300'
		backgroundColor='#ebebf0'
		foregroundColor='#d4d4d4'
		{...props}
	>
		<circle cx='365' cy='126' r='72' />
		<rect x='0' y='420' rx='0' ry='0' width='210' height='30' />
		<rect x='0' y='321' rx='0' ry='0' width='210' height='82' />
		<circle cx='39' cy='243' r='30' />
		<rect x='89' y='218' rx='0' ry='0' width='150' height='14' />
		<rect x='11' y='13' rx='22' ry='22' width='253' height='172' />
		<rect x='89' y='239' rx='0' ry='0' width='150' height='10' />
		<rect x='89' y='259' rx='0' ry='0' width='150' height='7' />
	</ContentLoader>
);

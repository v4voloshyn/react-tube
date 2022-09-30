import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../../firebase';

export const uploadFile = (file, setPercentage) =>
	new Promise((resolve, reject) => {
		const storage = getStorage(app);
		const filename = new Date().getTime() + file?.name;
		const storageRef = ref(storage, filename);

		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setPercentage(progress.toFixed(1));

				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
						break;
				}
			},
			(error) => {
				console.log(error);
				reject(error);
			},
			() => resolve(getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => downloadURL))
		);
	});

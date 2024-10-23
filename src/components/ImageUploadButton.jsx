import { Button, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const ImageUploadButton = ({ setImageUrl }) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = (file) => {
    if (!file) return;

    // Firebase Storage에 저장할 파일 경로 설정
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // 업로드 상태 변화 감지
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // 업로드 진행률을 계산
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // 업로드 실패 처리
        console.error('Upload failed:', error);
      },
      () => {
        // 업로드 완료 후 다운로드 URL 가져오기
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log('File available at', downloadURL);
        });
      }
    );
  };
  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Select Product Image
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => {
            const files = event.target.files;
            if (files.length >= 1) {
              handleUpload(files[0]);
            }
          }}
          multiple
        />
      </Button>
      {uploadProgress}
    </>
  );
};

export default ImageUploadButton;

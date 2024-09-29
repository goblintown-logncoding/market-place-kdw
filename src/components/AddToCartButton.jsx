import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  borderRadius: 20, // 둥근 모서리
  backgroundColor: 'transparent', // 투명한 배경색
  color: 'black', // 글자색
  border: '2px solid black', // 테두리 설정
  padding: '8px 130px', // 패딩
  textTransform: 'none', // 버튼 텍스트의 대문자 자동 변환 방지
  fontSize: '1rem', // 폰트 크기
  '&:hover': {
    backgroundColor: 'black', // 호버 상태의 배경색
    color: 'white' // 호버 상태의 글자색
  }
});

function AddToCartButton() {
  return (
    <StyledButton fullWidth variant="contained">
      Add to Cart
    </StyledButton>
  );
}

export default AddToCartButton;

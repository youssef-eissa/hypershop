import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { OneUser } from '../../types/app';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
'& .MuiBadge-badge': {
    right: -5,
    top: 0,
},
}));
type ICardBadge = {
    user: OneUser;
    isSuccess:boolean
}

export default function CustomizedBadges({user, isSuccess}: ICardBadge) {

return (
    <IconButton aria-label="cart">
    <StyledBadge badgeContent={isSuccess&&user.carts.length} color="primary">
        <ShoppingCartIcon fontSize='large' sx={{ color: 'white', ":hover": { color: "#F99417" },transition: '0.3s' }} />
    </StyledBadge>
    </IconButton>
);
}
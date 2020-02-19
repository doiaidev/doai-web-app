import React from 'react';
import { Link } from 'react-router-dom';
/* import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions'; */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Content, Profile, ActiveLink, MenuResponsive } from './styles';
import colors from '../../styles/colors';

import Logo from '../../assets/images/logo-doai.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function Header() {
  const classes = useStyles();
/*   const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile); */

/*   function handleSignOut() {
    dispatch(signOut());
  } */

  return (

    <Container>
      <Content>
        <nav>
          <ActiveLink to="/dashboard">
            <picture>
              <img src={Logo} alt="logo GymPoint" />
            </picture>
          </ActiveLink>
          <ActiveLink
            to="/dashboard"
            activeStyle={{ color: colors.activeLink }}
          >
            mapa
          </ActiveLink>
          <ActiveLink to="/support" activeStyle={{ color: colors.activeLink }}>
            apoio
          </ActiveLink>
          <ActiveLink
            to="/feedback"
            activeStyle={{ color: colors.activeLink }}
          >
            fale conosco
          </ActiveLink>
          <ActiveLink
            to="/help"
            activeStyle={{ color: colors.activeLink }}
          >
            dúvidas
          </ActiveLink>
        </nav>

        <Profile>
          <Link to="/register">
            CADASTRE-SE
          </Link>
        </Profile>
      </Content>
    </Container>
  );
}

export default Header;

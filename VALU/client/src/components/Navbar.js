import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;

const Username = styled.span`
  font-weight: 500;
`;

const LogoutButton = styled.button`
  background: rgba(231, 76, 60, 0.8);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(231, 76, 60, 1);
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">VALU</Logo>
        
        <NavLinks>
          <NavLink to="/">Главная</NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink to="/profile">Профиль</NavLink>
              <UserInfo>
                <Username>Привет, {user?.username}!</Username>
                <LogoutButton onClick={handleLogout}>
                  Выйти
                </LogoutButton>
              </UserInfo>
            </>
          ) : (
            <AuthButtons>
              <NavLink to="/login">Войти</NavLink>
              <NavLink to="/register">Регистрация</NavLink>
            </AuthButtons>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 
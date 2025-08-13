import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const ProfileContainer = styled.div`
  min-height: 80vh;
  padding: 2rem 0;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  color: white;
  font-weight: 700;
`;

const InfoSection = styled.div`
  margin-bottom: 2rem;
`;

const InfoLabel = styled.div`
  font-weight: 600;
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
`;

const InfoValue = styled.div`
  font-size: 1.2rem;
  color: #333;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #667eea;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
  }
  
  &.secondary {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const WelcomeMessage = styled.div`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Profile = () => {
  const { user } = useAuth();

  // Получаем первую букву имени пользователя для аватара
  const getInitials = (username) => {
    return username ? username.charAt(0).toUpperCase() : 'U';
  };

  // Получаем дату регистрации (примерная)
  const getRegistrationDate = () => {
    const now = new Date();
    return now.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <ProfileContainer>
      <ProfileCard>
        <Title>Профиль пользователя</Title>
        
        <Avatar>
          {getInitials(user?.username)}
        </Avatar>
        
        <WelcomeMessage>
          Добро пожаловать в ваш личный кабинет! Здесь вы можете управлять своим аккаунтом и просматривать информацию о профиле.
        </WelcomeMessage>
        
        <InfoSection>
          <InfoLabel>Имя пользователя</InfoLabel>
          <InfoValue>{user?.username || 'Не указано'}</InfoValue>
        </InfoSection>
        
        <InfoSection>
          <InfoLabel>Email адрес</InfoLabel>
          <InfoValue>{user?.email || 'Не указано'}</InfoValue>
        </InfoSection>
        
        <InfoSection>
          <InfoLabel>Дата регистрации</InfoLabel>
          <InfoValue>{getRegistrationDate()}</InfoValue>
        </InfoSection>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>1</StatNumber>
            <StatLabel>Аккаунт</StatLabel>
          </StatCard>
          
          <StatCard>
            <StatNumber>24ч</StatNumber>
            <StatLabel>Токен активен</StatLabel>
          </StatCard>
          
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Безопасность</StatLabel>
          </StatCard>
          
          <StatCard>
            <StatNumber>✓</StatNumber>
            <StatLabel>Подтвержден</StatLabel>
          </StatCard>
        </StatsGrid>
        
        <Actions>
          <ActionButton className="primary">
            Редактировать профиль
          </ActionButton>
          <ActionButton className="secondary">
            Изменить пароль
          </ActionButton>
        </Actions>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile; 
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Hero = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-4px);
    }
  }
`;

const Features = styled.section`
  padding: 5rem 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Hero>
        <HeroContent>
          <Title>Добро пожаловать в VALU</Title>
          <Subtitle>
            Современная платформа с надежной системой аутентификации. 
            Присоединяйтесь к нашему сообществу и откройте для себя новые возможности.
          </Subtitle>
          
          <CTAButtons>
            {!isAuthenticated ? (
              <>
                <CTAButton to="/register" className="primary">
                  Начать
                </CTAButton>
                <CTAButton to="/login" className="secondary">
                  Уже есть аккаунт?
                </CTAButton>
              </>
            ) : (
              <CTAButton to="/profile" className="primary">
                Перейти в профиль
              </CTAButton>
            )}
          </CTAButtons>
        </HeroContent>
      </Hero>

      <Features>
        <FeaturesContainer>
          <FeaturesTitle>Почему выбирают VALU?</FeaturesTitle>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🔐</FeatureIcon>
              <FeatureTitle>Безопасность</FeatureTitle>
              <FeatureDescription>
                Надежная система аутентификации с JWT токенами и хешированием паролей
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureTitle>Скорость</FeatureTitle>
              <FeatureDescription>
                Быстрая работа благодаря современным технологиям React и Node.js
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🎨</FeatureIcon>
              <FeatureTitle>Дизайн</FeatureTitle>
              <FeatureDescription>
                Современный и отзывчивый интерфейс с плавными анимациями
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>📱</FeatureIcon>
              <FeatureTitle>Адаптивность</FeatureTitle>
              <FeatureDescription>
                Отлично работает на всех устройствах и размерах экрана
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🚀</FeatureIcon>
              <FeatureTitle>Простота</FeatureTitle>
              <FeatureDescription>
                Интуитивно понятный интерфейс для комфортного использования
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🛡️</FeatureIcon>
              <FeatureTitle>Надежность</FeatureTitle>
              <FeatureDescription>
                Стабильная работа и регулярные обновления системы
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContainer>
      </Features>
    </>
  );
};

export default Home; 
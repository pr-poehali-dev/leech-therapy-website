import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'therapy', label: 'Гирудотерапия' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contacts', label: 'Контакты' }
  ];

  const services = [
    {
      title: 'Лечение варикоза',
      description: 'Эффективная терапия варикозного расширения вен',
      icon: 'Activity'
    },
    {
      title: 'Головные боли и мигрени',
      description: 'Помощь при хронических болях и мигренях',
      icon: 'Brain'
    },
    {
      title: 'Артрит и остеохондроз',
      description: 'Облегчение болей в суставах и позвоночнике',
      icon: 'Bone'
    },
    {
      title: 'Гипертония',
      description: 'Нормализация артериального давления',
      icon: 'Heart'
    },
    {
      title: 'Косметология',
      description: 'Омоложение и улучшение состояния кожи',
      icon: 'Sparkles'
    },
    {
      title: 'Профилактика',
      description: 'Укрепление иммунитета и общего здоровья',
      icon: 'Shield'
    }
  ];

  const testimonials = [
    {
      name: 'Мария Иванова',
      text: 'После курса гирудотерапии у Ольги Васильевны забыла о болях в ногах. Профессиональный подход и внимательное отношение!',
      rating: 5
    },
    {
      name: 'Сергей Петров',
      text: 'Долго страдал от остеохондроза. Уже после третьего сеанса почувствовал значительное облегчение. Рекомендую!',
      rating: 5
    },
    {
      name: 'Анна Смирнова',
      text: 'Ольга Васильевна — настоящий специалист своего дела. Гирудотерапия помогла справиться с мигренями.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Ялина О.В.</h1>
            <div className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
              Записаться
            </Button>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">Меню</h2>
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-lg font-medium transition-colors hover:text-primary py-2 ${
                        activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Separator className="my-4" />
                  <Button onClick={() => scrollToSection('contacts')} size="lg" className="w-full">
                    Записаться на консультацию
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                Гирудотерапия
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                Естественное лечение с применением медицинских пиявок
              </p>
              <p className="text-lg text-foreground/70 mb-8">
                Ялина Ольга Васильевна — сертифицированный специалист с многолетним опытом
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg">
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('therapy')} className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/6ef6599a-490e-4c23-96ad-9e82ec81c82b/files/a96cb305-c00b-4a56-985e-abd3ade04fe0.jpg"
                alt="Специалист по гирудотерапии"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              Обо мне
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Icon name="GraduationCap" className="mx-auto mb-4 text-accent" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Образование</h3>
                  <p className="text-foreground/70">Сертифицированный специалист по гирудотерапии</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Icon name="Award" className="mx-auto mb-4 text-accent" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Опыт</h3>
                  <p className="text-foreground/70">Более 10 лет практики в области натуральной медицины</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Icon name="Users" className="mx-auto mb-4 text-accent" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Пациенты</h3>
                  <p className="text-foreground/70">Более 500 довольных клиентов</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  Приветствую вас! Я — Ялина Ольга Васильевна, практикующий специалист по гирудотерапии 
                  с многолетним опытом работы.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  Моя миссия — помочь людям восстановить и укрепить здоровье естественным путем. 
                  Я убеждена, что природа дала нам удивительные инструменты для исцеления, и гирудотерапия — 
                  один из самых эффективных методов натуральной медицины.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Индивидуальный подход к каждому пациенту, внимательность и профессионализм — 
                  основа моей практики. Буду рада помочь вам на пути к здоровью и благополучию.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Услуги
          </h2>
          <p className="text-center text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Комплексное лечение широкого спектра заболеваний с помощью гирудотерапии
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={service.icon as any} className="mb-4 text-primary" size={40} />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="therapy" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/6ef6599a-490e-4c23-96ad-9e82ec81c82b/files/5b8c38d3-5021-459d-903a-4188ae547365.jpg"
                alt="Медицинская пиявка"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Что такое гирудотерапия?
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Гирудотерапия — это древний метод лечения, основанный на применении медицинских пиявок. 
                Слюна пиявки содержит более 100 биологически активных веществ, которые оказывают 
                комплексное целебное воздействие на организм.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Улучшение кровообращения</h4>
                    <p className="text-foreground/70">Разжижение крови и профилактика тромбоза</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Противовоспалительный эффект</h4>
                    <p className="text-foreground/70">Снижение воспаления и отеков</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Обезболивающее действие</h4>
                    <p className="text-foreground/70">Естественное облегчение боли</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Иммуномодуляция</h4>
                    <p className="text-foreground/70">Укрепление защитных сил организма</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Отзывы пациентов
          </h2>
          <p className="text-center text-lg text-foreground/70 mb-12">
            Что говорят люди, которые уже прошли курс лечения
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              Контакты
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Свяжитесь со мной</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <a href="tel:+79001234567" className="text-foreground/70 hover:text-primary transition-colors">
                          +7 (900) 123-45-67
                        </a>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:yalina@example.com" className="text-foreground/70 hover:text-primary transition-colors">
                          yalina@example.com
                        </a>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-foreground/70">
                          г. Москва, ул. Примерная, д. 1
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="font-medium">Режим работы</p>
                        <p className="text-foreground/70">Пн-Пт: 9:00 - 18:00</p>
                        <p className="text-foreground/70">Сб: 10:00 - 15:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Запись на консультацию</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Форма отправки будет подключена позже!'); }}>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        rows={4}
                        placeholder="Расскажите о вашей проблеме"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 Ялина Ольга Васильевна. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#home" className="text-sm hover:text-accent transition-colors">Главная</a>
              <a href="#about" className="text-sm hover:text-accent transition-colors">Обо мне</a>
              <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
              <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
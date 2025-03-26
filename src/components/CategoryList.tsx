
import { useLanguage } from '@/hooks/useLanguage';
import { Smartphone, ShoppingBag, Home, Scissors, ShoppingCart } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  color: string;
}

const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    nameAr: 'الإلكترونيات',
    icon: <Smartphone size={24} />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'fashion',
    name: 'Fashion',
    nameAr: 'الأزياء',
    icon: <ShoppingBag size={24} />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'home',
    name: 'Home Appliances',
    nameAr: 'الأجهزة المنزلية',
    icon: <Home size={24} />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    nameAr: 'الجمال',
    icon: <Scissors size={24} />,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 'grocery',
    name: 'Grocery',
    nameAr: 'البقالة',
    icon: <ShoppingCart size={24} />,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const CategoryList = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {language === 'en' ? 'Popular Categories' : 'التصنيفات الشائعة'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.id}`}
              className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:scale-105 animate-float"
            >
              <div className={`p-3 rounded-full ${category.color} mb-4`}>
                {category.icon}
              </div>
              <span className="font-medium">
                {language === 'en' ? category.name : category.nameAr}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;

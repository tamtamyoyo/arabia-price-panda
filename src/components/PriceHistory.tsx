
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingDown } from 'lucide-react';

const PriceHistory = () => {
  const { language, theme } = useLanguage();
  
  // Sample price history data
  const data = [
    { date: 'Jan', amazon: 4500, noon: 4700, jarir: 4600 },
    { date: 'Feb', amazon: 4400, noon: 4550, jarir: 4500 },
    { date: 'Mar', amazon: 4300, noon: 4400, jarir: 4450 },
    { date: 'Apr', amazon: 4200, noon: 4300, jarir: 4350 },
    { date: 'May', amazon: 4250, noon: 4200, jarir: 4300 },
    { date: 'Jun', amazon: 4000, noon: 4100, jarir: 4200 },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="text-primary" size={24} />
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'en' ? 'Price History' : 'سجل الأسعار'}
          </h2>
        </div>
        
        <Card className={theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              {language === 'en' ? 'iPhone 15 Pro Max - 256GB' : 'آيفون 15 برو ماكس - 256 جيجابايت'}
            </CardTitle>
            <Select defaultValue="6m">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder={language === 'en' ? 'Time Period' : 'الفترة الزمنية'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">{language === 'en' ? '1 Month' : 'شهر واحد'}</SelectItem>
                <SelectItem value="3m">{language === 'en' ? '3 Months' : '3 أشهر'}</SelectItem>
                <SelectItem value="6m">{language === 'en' ? '6 Months' : '6 أشهر'}</SelectItem>
                <SelectItem value="1y">{language === 'en' ? '1 Year' : 'سنة واحدة'}</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#555' : '#eee'} />
                  <XAxis 
                    dataKey="date" 
                    stroke={theme === 'dark' ? '#aaa' : '#888'} 
                    style={{ fontSize: '12px' }} 
                  />
                  <YAxis 
                    stroke={theme === 'dark' ? '#aaa' : '#888'} 
                    style={{ fontSize: '12px' }} 
                    tickFormatter={tick => `${tick} SAR`} 
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                      borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                      color: theme === 'dark' ? '#f9fafb' : '#111827',
                    }}
                    formatter={(value) => [`${value} SAR`, undefined]}
                    labelFormatter={label => `${language === 'en' ? 'Date' : 'التاريخ'}: ${label}`}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line 
                    type="monotone" 
                    dataKey="amazon" 
                    stroke="#FF9900" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                    name="Amazon" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="noon" 
                    stroke="#FEEE00" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                    name="Noon" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="jarir" 
                    stroke="#E21C23" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                    name="Jarir" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-muted-foreground text-center">
              {language === 'en' 
                ? 'Current lowest price: 3,999 SAR on Amazon (15% off)'
                : 'أقل سعر حالي: 3,999 ريال على أمازون (خصم 15٪)'
              }
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceHistory;

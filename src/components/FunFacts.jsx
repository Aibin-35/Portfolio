import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';

const FunFacts = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Lottie.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load Lottie:', err));
  }, []);

  const facts = [
    { label: 'Projects Completed', value: 12 },
    { label: 'Cups of Coffee', value: 378 },
    { label: 'Hours Coded', value: 1000 },
    { label: 'Certificates', value: 7 },
  ];

  return (
    <section ref={ref} className="bg-[#0f172a] py-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-300">🚀 Fun Facts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-2xl p-6 shadow-md hover:shadow-purple-500 transition-all duration-300 flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-4">
              {animationData && (
                <Lottie animationData={animationData} loop={true} />
              )}
            </div>
            <p className="text-4xl font-bold text-purple-400">
              {inView ? <CountUp end={fact.value} duration={2} /> : '0'}
            </p>
            <p className="text-lg mt-2">{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;

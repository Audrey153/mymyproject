import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Advantages from './sections/Advantages.jsx';
import Contact from './sections/Contact.jsx';

/**
 * 统一进场动画：
 * - 全站仅创建一个 IntersectionObserver（无滚动监听、无 rAF 循环）
 * - 元素带 data-reveal 属性即参与动画；进入视口后加 .is-in 并立即 unobserve（只播一次）
 * - prefers-reduced-motion 或浏览器不支持 IO 时，直接显示，不做动画
 */
function useRevealOnce() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (els.length === 0) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target); // 只播放一次，之后不再监听
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect(); // 卸载时清理
  }, []);
}

export default function App() {
  useRevealOnce();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Advantages />
        <Contact />
      </main>
    </>
  );
}

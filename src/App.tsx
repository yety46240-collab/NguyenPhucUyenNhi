/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Book, 
  Code, 
  Mail, 
  ExternalLink, 
  FileText, 
  ChevronRight,
  Menu,
  X,
  Library,
  Phone
} from 'lucide-react';
import { useState, useEffect } from 'react';

const exercises = [
  {
    id: 1,
    title: "Thiết kế danh thiếp cho Saddle Capital and Investments",
    description: "Thiết kế bộ nhận diện thương hiệu cơ bản và danh thiếp chuyên nghiệp cho quỹ đầu tư.",
    category: "Branding",
    link: "https://drive.google.com/file/d/1c11_PsZgMAgQIU1DTHwit1tgkT4Fa5FS/view?usp=sharing"
  },
  {
    id: 2,
    title: "Typography - Blog Thú Cưng - Chăm Sóc Thú Cưng",
    description: "Ứng dụng Typography trong thiết kế giao diện blog chia sẻ kiến thức chăm sóc thú cưng.",
    category: "Typography",
    link: "https://drive.google.com/file/d/1T82FmK7PJN6QbyiUG8MrmAKj3J3PYBv0/view?usp=sharing"
  },
  {
    id: 3,
    title: "Phân tích ý nghĩa logo và các nguyên lý phối hợp màu sắc",
    description: "Nghiên cứu sâu về ngôn ngữ thiết kế và sự tác động của màu sắc trong nhận diện thương hiệu.",
    category: "Design Theory",
    link: "https://drive.google.com/file/d/1sP6uWCTbjTxEdoWR9CBuP_hwy9C_q5gw/view?usp=sharing"
  },
  {
    id: 4,
    title: "Thực hành chụp ảnh",
    description: "Sản phẩm thực hành kỹ thuật nhiếp ảnh, bắt trọn những khoảnh khắc và góc nhìn nghệ thuật.",
    category: "Photography",
    link: "https://drive.google.com/file/d/1qpS-mzTN9D6Qp-lHA2M8drIhCoBQcC-5/view?usp=sharing"
  },
  {
    id: 5,
    title: "Phân tích chi tiết logo Toei Animation dựa trên 5 thành tố",
    description: "Giải mã sự thành công của thương hiệu anime huyền thoại qua các yếu tố thiết kế kinh điển.",
    category: "Analysis",
    link: "https://drive.google.com/file/d/1Uqhw0E9zErHjmaRfd_ReTvTptGPhuqX5/view?usp=sharing"
  },
  {
    id: 6,
    title: "Đề xuất Thương hiệu cá nhân : Yuki Shop",
    description: "Kế hoạch xây dựng và phát triển hình ảnh thương hiệu cá nhân cho dự án kinh doanh thời trang.",
    category: "Personal Brand",
    link: "https://drive.google.com/file/d/1l5i3aD7Gz8VqJQ50hGBBqHD8_t_CDt0w/view?usp=sharing"
  }
];

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "ReactJS", level: 80 },
  { name: "Python", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Design", level: 85 },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Bài tập", href: "#exercises" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <div className="min-h-screen Selection:bg-classic-gold selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
          scrolled ? 'bg-classic-bg/80 backdrop-blur-md border-b border-classic-gold/20 py-3' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold font-serif tracking-tight text-classic-gold"
          >
            Nguyễn Phúc Uyển Nhi
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-sans font-medium uppercase tracking-widest text-classic-ink hover:text-classic-gold transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-classic-ink p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-classic-bg border-b border-classic-gold/20 flex flex-col p-6 gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-serif italic text-classic-ink"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 flex flex-col justify-center"
          >
            <span className="text-classic-gold uppercase tracking-[0.3em] font-sans text-xs font-semibold mb-6 block">Xin chào, mình là</span>
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-8 group">
              <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] text-classic-ink">
                Nguyễn Phúc <br />
                <span className="text-classic-gold italic">Uyển Nhi</span>
              </h1>
              {/* Avatar on the right of the title (Mobile view adjusts, desktop shows it side-by-side) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:block relative"
              >
                <div className="w-48 h-64 overflow-hidden rounded-full border-4 border-classic-gold ring-8 ring-classic-gold/10 transform hover:rotate-3 transition-transform duration-500">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1OND_i8OfFqci9_Rj8zXNNrufFx50WHwo" 
                    alt="Nguyễn Phúc Uyển Nhi" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-xl">
                  <div className="bg-classic-gold p-2 rounded-full text-white">
                    <Code size={20} />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Mobile/Tablet Avatar */}
            <div className="lg:hidden mb-8">
               <div className="w-32 h-32 overflow-hidden rounded-full border-2 border-classic-gold mx-auto">
                <img 
                  src="https://lh3.googleusercontent.com/d/1OND_i8OfFqci9_Rj8zXNNrufFx50WHwo" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl font-sans text-classic-muted leading-relaxed max-w-xl italic mb-10">
              Sinh viên Công nghệ thông tin với niềm đam mê sâu sắc trong việc tạo ra những giao diện người dùng tinh tế và trải nghiệm số độc đáo.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#contact" 
                className="bg-classic-ink text-white px-8 py-4 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-classic-gold transition-all duration-300 shadow-lg shadow-black/10"
              >
                Liên hệ ngay
              </a>
            </div>
          </motion.div>

          <div className="md:col-span-4 hidden md:flex justify-end pr-10">
            <div className="flex flex-col gap-12 items-center">
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-classic-gold to-transparent opacity-50"></div>
              <div className="writing-mode-vertical text-xs uppercase tracking-[0.5em] text-classic-gold font-sans font-bold py-12" style={{ writingMode: 'vertical-rl' }}>
                CREATIVE DEVELOPER • PORTFOLIO 2026
              </div>
              <div className="w-px h-32 bg-gradient-to-b from-transparent via-classic-gold to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-12 text-classic-ink">Về bản thân</h2>
            <div className="space-y-6 text-classic-muted text-xl font-sans leading-relaxed text-justify md:text-center max-w-3xl mx-auto">
              <p>
                Mình là <span className="text-classic-gold font-medium">Nguyễn Phúc Uyển Nhi</span>, hiện đang là sinh viên năm 3 chuyên ngành Công Nghệ Thông Tin thuộc trường Đại Học Nam Cần Thơ.
              </p>
              <p className="italic">
                Là một lập trình viên trẻ đam mê sự kết hợp giữa công nghệ hiện đại và thẩm mỹ cổ điển. Mỗi dòng mã mình viết không chỉ dừng lại ở chức năng, mà còn là một phần của câu chuyện về sự tinh tế và trải nghiệm người dùng.
              </p>
              <div className="flex justify-center pt-8">
                <div className="w-12 h-0.5 bg-classic-gold/30"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-classic-ink">Kỹ năng chính</h2>
            <div className="w-24 h-1 bg-classic-gold mx-auto opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-classic-gold/10 hover:border-classic-gold/40 transition-all duration-300 shadow-sm group"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-serif font-medium text-classic-ink group-hover:text-classic-gold transition-colors">{skill.name}</h3>
                  <span className="text-sm font-sans font-bold text-classic-gold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-classic-bg rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-classic-gold"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-24 px-6 bg-classic-ink text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-classic-gold uppercase tracking-widest text-xs font-bold mb-4 block">Featured Works</span>
              <h2 className="text-4xl md:text-5xl font-serif">Dự án cá nhân</h2>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Library className="text-classic-gold" size={24} />
                  <span className="text-sm font-sans tracking-widest uppercase opacity-70">Web Application</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Hệ thống <br /> Quản lý sách điện tử</h3>
                <p className="text-lg font-sans text-zinc-400 mb-10 leading-relaxed max-w-md">
                  Một ứng dụng hiện đại hỗ trợ người dùng quản lý thư viện cá nhân, theo dõi tiến độ đọc và lưu trữ ghi chú thông minh cho từng tác phẩm.
                </p>
                <ul className="space-y-4 mb-12 flex flex-col gap-2">
                  <li className="flex items-center gap-3 text-sm font-sans opacity-80"><ChevronRight size={16} className="text-classic-gold" /> ReactJS & Tailwind CSS</li>
                  <li className="flex items-center gap-3 text-sm font-sans opacity-80"><ChevronRight size={16} className="text-classic-gold" /> Firebase Authentication</li>
                  <li className="flex items-center gap-3 text-sm font-sans opacity-80"><ChevronRight size={16} className="text-classic-gold" /> Cloud Firestore Database</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/yety46240-collab/Quan-Ly-Sach-Dien-Tu.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-classic-gold text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-classic-gold/20 hover:scale-105 transition-transform">
                    <Code size={18} /> Xem trên GitHub
                  </a>
                  <a href="#" className="p-3 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto order-1 lg:order-2 overflow-hidden bg-zinc-800 flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-l from-classic-ink via-transparent to-transparent z-10 hidden lg:block"></div>
                 <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                  src="https://lh3.googleusercontent.com/d/1x6fsj18anqS7qhlSWSOnKCW392pt0KO-" 
                  alt="E-book project" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute z-20 flex flex-col items-center">
                    <div className="w-64 h-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col justify-between">
                       <div className="space-y-2">
                          <div className="w-12 h-1.5 bg-classic-gold rounded-full"></div>
                          <div className="w-full h-8 bg-white/5 rounded-lg"></div>
                          <div className="w-3/4 h-4 bg-white/5 rounded-lg"></div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                           <div className="aspect-square bg-white/5 rounded-xl"></div>
                           <div className="aspect-square bg-white/5 rounded-xl"></div>
                       </div>
                       <div className="w-full h-10 bg-classic-gold/80 rounded-lg"></div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exercises Section */}
      <section id="exercises" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-classic-gold uppercase tracking-[0.3em] font-sans text-xs font-semibold mb-4 block">Archive</span>
            <h2 className="text-4xl md:text-5xl font-serif text-classic-ink">Danh mục bài tập thực hành</h2>
            <p className="mt-4 text-classic-muted italic">Tổng hợp những kiến thức đã áp dụng vào thực tế</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-classic-gold/10 hover:border-classic-gold/30 transition-all duration-500 group shadow-lg shadow-black/[0.02]"
              >
                <div className="w-12 h-12 bg-classic-bg rounded-2xl flex items-center justify-center text-classic-gold mb-6 group-hover:bg-classic-gold group-hover:text-white transition-all duration-500">
                  <FileText size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-classic-gold/60 mb-2 block">{item.category}</span>
                <h3 className="text-2xl font-serif font-medium text-classic-ink mb-4 group-hover:text-classic-gold transition-colors">{item.title}</h3>
                <p className="text-classic-muted text-sm leading-relaxed mb-8 opacity-80">{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-classic-ink border-b border-classic-gold/40 pb-1 group-hover:border-classic-gold transition-all">
                  Chi tiết <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-12 rounded-[3rem] bg-classic-gold/5 border border-dashed border-classic-gold/30 text-center"
          >
             <p className="text-xl font-serif italic text-classic-gold/80 max-w-2xl mx-auto">
               "Học mà không hành thì chỉ là lý thuyết, hành mà không học thì thật là nguy hiểm." - Một châm ngôn giúp mình không ngừng nỗ lực trong các bài thực hành.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white relative">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-5xl md:text-6xl font-serif mb-8 text-classic-ink">Kết nối với mình</h2>
               <p className="text-lg text-classic-muted mb-12 max-w-md italic">
                 Luôn sẵn sàng lắng nghe những ý tưởng mới và cơ hội hợp tác sáng tạo. Đừng ngần ngại để lại lời nhắn!
               </p>

               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 rounded-full bg-classic-bg flex items-center justify-center text-classic-gold">
                        <Mail size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-sans uppercase tracking-widest text-classic-gold font-bold">Email</p>
                        <p className="text-xl font-serif">nguyenphucuyenn@gmail.com</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 rounded-full bg-classic-bg flex items-center justify-center text-classic-gold">
                        <Phone size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-sans uppercase tracking-widest text-classic-gold font-bold">Điện thoại</p>
                        <p className="text-xl font-serif">0939662053</p>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-classic-bg/50 p-10 rounded-[2.5rem] border border-classic-gold/10"
            >
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-classic-gold ml-2">Họ tên</label>
                       <input type="text" className="bg-white border-b border-classic-gold/20 p-4 font-sans focus:outline-none focus:border-classic-gold transition-all" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-classic-gold ml-2">Email</label>
                       <input type="email" className="bg-white border-b border-classic-gold/20 p-4 font-sans focus:outline-none focus:border-classic-gold transition-all" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-classic-gold ml-2">Lời nhắn</label>
                     <textarea rows={4} className="bg-white border-b border-classic-gold/20 p-4 font-sans focus:outline-none focus:border-classic-gold transition-all resize-none" placeholder="Hãy nói gì đó với mình..."></textarea>
                  </div>
                  <button className="w-full py-5 bg-classic-ink text-white font-sans text-sm uppercase tracking-widest hover:bg-classic-gold transition-all duration-300 rounded-full shadow-lg">
                    Gửi đi
                  </button>
               </form>
            </motion.div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-classic-gold/10 px-6 bg-classic-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-xl font-serif font-bold text-classic-ink">
             Uyển Nhi<span className="text-classic-gold">.</span>
           </div>
           <p className="text-xs font-sans uppercase tracking-[0.2em] text-classic-muted">
             © 2026 — Bản quyền thuộc về <span className="text-classic-gold font-bold">Nguyễn Phúc Uyển Nhi</span>
           </p>
           <div className="flex gap-6">
              <a href="mailto:nguyenphucuyenn@gmail.com" className="text-classic-muted hover:text-classic-gold transition-colors"><Mail size={18} /></a>
           </div>
        </div>
      </footer>
    </div>
  );
}

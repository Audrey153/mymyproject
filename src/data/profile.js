// 个人作品集全部数据。简历中明确给出的信息才会被写入。
// 缺失 / 简历未提及的字段统一用 null 标记，组件渲染时会显示「待补充」。
export const profile = {
  name: '廖奥迎',
  nickname: '乐事',
  role: '西南交通大学 · 准大一学生',
  school: '西南交通大学',
  status: '准大一 · 2026 级',
  major: '待补充',        // 简历未写专业
  avatar: null,           // 没有真实头像，组件用首字母占位
  tagline: '把复杂的事变简单 · 用组织力与好奇心造点东西',
  manifesto: '我的人生由我自己决定',
  bio:
    '高中三年一直担任班长，期间和班委一起建设班级文化、组织元旦晚会和各类班级活动。' +
    '喜欢把一件看上去很复杂的事拆成可以落地的步骤，靠协作把它做成。' +
    '即将进入西南交通大学开始大学生活，希望在新环境里继续折腾、继续做事。',
  contacts: {
    wechat: 'zhangyixing076',
    qq: '3113283201',
    email: '3113283201@qq.com',
  },
  stats: [
    { label: '高中任职', value: '3 年班长' },
    { label: '高中母校', value: '江西省高安市第二中学' },
    { label: '即将入学', value: '西南交通大学' },
    { label: '个人项目', value: '2 个' },
  ],
};

export const experiences = [
  {
    type: 'work',
    title: '班长',
    org: '江西省高安市第二中学 · 高中',
    period: '高一 – 高三（连续三年）',
    location: '江西 · 宜春',
    summary:
      '连续三年担任班长，和其他班委一起建设班级文化，组织元旦晚会、运动会方阵、主题班会等各类班级活动。',
    bullets: [
      '牵头策划元旦晚会等大型班级活动，从节目征集、流程排期到现场调度全程负责',
      '和班委一起把班级日常事务（考勤、通知、物资）拆成可执行的清单',
      '在多任务并发时把优先级排清楚，让复杂事务变简单',
    ],
  },
  {
    type: 'education',
    title: '西南交通大学 · 本科（2026 级）',
    org: '西南交通大学',
    period: '2026 – 2030（待补充）',
    location: '四川 · 成都',
    summary:
      '即将入学的新阶段。具体专业、入学时间等信息以学校录取信息为准。',
    bullets: [
      '学校：西南交通大学',
      '入学年份：2026 级',
      '专业：待补充',
    ],
  },
  {
    type: 'education',
    title: '江西省高安市第二中学',
    org: '高中',
    period: '已毕业',
    location: '江西 · 宜春',
    summary: '完成高中学业，连续三年担任班长。',
    bullets: [
      '担任班长期间带领班委建设班级文化',
      '组织元旦晚会、各类班级活动',
    ],
  },
];

export const projects = [
  {
    id: 'class-leader-ppt',
    name: '班长竞选 PPT',
    cover: '/assets/img/project-class-leader.jpg',
    coverRatio: '16 / 9',
    coverOrigin: '截图原始比例保持不变（未被压扁）',
    summary:
      '「薯片」风格的高中班长竞选演示文稿。围绕"一颗想为大家服务的潜力薯"展开，把个人介绍、优势和承诺串成一个完整故事。',
    tags: ['PPT', '视觉设计', '内容策划'],
    highlights: [
      '页面采用统一的黄色调和薯片包装语言，建立强记忆点',
      '把"我能为班级做什么"拆成清楚的板块和承诺',
      '字体、配色、版式都做了统一设计，避免模板感',
    ],
    meta: '高中三年级 · 班长竞选',
  },
  {
    id: 'stellar-fighter',
    name: '星际战机（飞机大战小游戏）',
    cover: '/assets/img/project-stellar-fighter.jpg',
    coverRatio: '9 / 16',
    coverOrigin: '截图原始比例保持不变（未被压扁）',
    summary:
      '以"银河战争"为背景的飞机大战小游戏主菜单界面。包含开始游戏、无尽模式、双人合作 / PK、飞机库、每日任务、成就、勋章展馆等模块。',
    tags: ['游戏 UI', '交互设计', '前端'],
    highlights: [
      '赛博朋克 + 星空美术风格，霓虹蓝/紫主调',
      '主菜单结构清晰：核心玩法 + 收集 / 成长 + 系统',
      '按钮、文案、图标做了统一排版，状态明确',
    ],
    meta: '个人项目',
  },
];

export const advantages = [
  {
    title: '组织协调',
    desc: '能把复杂事务拆成可执行步骤；擅长统筹多任务、调动同学一起把事情做成。',
    icon: '◎',
  },
  {
    title: '沟通表达',
    desc: '在多次大型班级活动中担任牵头人，能清楚表达目标、协调分工、推进落地。',
    icon: '✦',
  },
  {
    title: '内容策划',
    desc: '做过竞选 PPT、班级活动方案，擅长把"想说的话"包装成别人愿意看的样子。',
    icon: '◇',
  },
  {
    title: '学习与执行',
    desc: '对新技术保持好奇，拿到一件事愿意先动手做起来，再迭代优化。',
    icon: '◈',
  },
  {
    title: '抗压与责任',
    desc: '三年班长经历锻炼了抗压能力，习惯为结果负责而不是甩锅。',
    icon: '◆',
  },
  {
    title: '审美与细节',
    desc: '在 PPT 设计和游戏 UI 中对字体、配色、比例有自己的标准，不接受模板感。',
    icon: '✧',
  },
];

export const tools = [
  { name: 'PowerPoint / Keynote', tag: '演示设计' },
  { name: 'Figma / 即时设计', tag: '界面设计' },
  { name: 'HTML / CSS / JavaScript', tag: '前端' },
  { name: 'React', tag: '前端框架' },
  { name: 'Vite', tag: '构建工具' },
  { name: 'Photoshop / Canva', tag: '图像处理' },
  { name: 'Notion / 飞书', tag: '协作' },
  { name: 'Git / GitHub', tag: '版本管理' },
];

var menuData = [
  { 
    title: '文件(F)',
    menuItems: [
      {
        title: '新建(N)',
        shortcut: 'Ctrl+N',
        enabled: true,
      },
      {
        title: '打开(O)...',
        shortcut: 'Ctrl+O',
        enabled: true,
      },
      {
        title: '保存(S)',
        shortcut: 'Ctrl+S',
        enabled: true,
      },
      {
        title: '另存为(A)...',
        shortcut: '',
        enabled: true,
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '页面设置(U)...',
        shortcut: '',
        enabled: true,
      },
      {
        title: '打印(P)...',
        shortcut: 'Ctrl+P',
        enabled: true,
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '退出(X)',
        shortcut: '',
        enabled: true,
      }
    ],
    width: '202px',
    left: '0px'
  },
  { 
    title: '编辑(E)',
    menuItems: [
      {
        title: '撤销(U)',
        shortcut: 'Ctrl+Z',
        enabled: false,
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '剪切(T)',
        shortcut: 'Ctrl+X',
        enabled: true,
      },
      {
        title: '复制(C)',
        shortcut: 'Ctrl+C',
        enabled: false,
      },
      {
        title: '粘贴(P)',
        shortcut: 'Ctrl+V',
        enabled: false,
      },
      {
        title: '删除(L)',
        shortcut: 'Del',
        enabled: false,
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '使用 Bing 搜索...',
        shortcut: 'Ctrl+E',
        enabled: true,
      },
      {
        title: '查找(F)...',
        shortcut: 'Ctrl+F',
        enabled: false,
      },
      {
        title: '查找下一个(N)',
        shortcut: 'F3',
        enabled: false,
      },
      {
        title: '替换(R)...',
        shortcut: 'Ctrl+H',
        enabled: true,
      },
      {
        title: '转到(G)...',
        shortcut: 'Ctrl+G',
        enabled: true,
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '全选(A)',
        shortcut: 'Ctrl+A',
        enabled: true,
      },
      {
        title: '时间/日期(D)',
        shortcut: 'F5',
        enabled: true,
      },
    ],
    width: '218px',
    left: '62px'
  },
  { 
    title: '格式(O)',
    menuItems: [
      {
        title: '自动换行(W)',
        shortcut: '',
        enabled: true,
      },
      {
        title: '字体(F)...',
        shortcut: '',
        enabled: true,
        handler: function() {
          console.log('字体(F) menu clicked!');
          var set =new $setfont();
          set.show('body');
        }
      }
    ],
    width: '156px',
    left: '124px'
  },
  { 
    title: '查看(V)',
    menuItems: [
      {
        title: '状态栏(S)',
        shortcut: '',
        enabled: true,
      }
    ],
    width: '138px',
    left: '186px'
  },
  { 
    title: '帮助(H)',
    menuItems: [
      {
        title: '查看帮助(H)',
        shortcut: '',
        enabled: true,
      },
      {
        title: '关于记事本(A)',
        shortcut: '',
        enabled: true,
      },
    ],
    left: '248px'
  }
];

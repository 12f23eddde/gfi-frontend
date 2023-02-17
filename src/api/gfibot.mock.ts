import type * as gfi from './gfibot.d';

export const repoLanguagesMock: string[] = [
  'C#',
  'C++',
  'HTML',
  'Java',
  'JavaScript',
  'Jupyter Notebook',
  'PHP',
  'Python',
  'TypeScript'
];

export const repoPagedMock: gfi.GFIPaginated<gfi.RepoDetail> = {
  'code': 200,
  'result': [
    {
      'name': 'Algo_Ds_Notes',
      'owner': 'jainaman224',
      'description': 'It is a repository that is a collection of algorithms and data structures with implementation in various languages.',
      'language': 'C++',
      'topics': [
        'algorithm',
        'data-structures',
        'object-oriented',
        'programming',
        'documentation'
      ],
      'r_newcomer_resolved': 0.36894824707846413,
      'n_stars': 1855,
      'n_gfis': 137,
      'issue_close_time': 306134.5,
      'accuracy': 0.7896494156928213,
      'auc': 0.6970480499892264,
      'last_updated': '2022-12-01T08:13:47.485000+00:00'
    },
    {
      'name': 'AncientBeast',
      'owner': 'FreezingMoon',
      'description': 'Turn Based Strategy Game. Master your beasts! 🐺',
      'language': 'JavaScript',
      'topics': [
        'game',
        'javascript',
        'strategy-game',
        'sprites',
        'strategy',
        'nodejs',
        'multiplayer',
        'multiplayer-browser-game',
        'multiplayer-game',
        'chess',
        'pokemon',
        '2d-game',
        'phaser-game',
        'esports',
        'turn-based-strategy',
        'strategy-game-engine',
        'html5-game',
        'hacktoberfest',
        'hacktoberfest2022',
        'hacktoberfest-accepted'
      ],
      'r_newcomer_resolved': 0.04627766599597585,
      'n_stars': 1087,
      'n_gfis': 3,
      'issue_close_time': 3818808,
      'accuracy': 0.959758551307847,
      'auc': 0.8213171895065124,
      'last_updated': '2022-12-01T08:13:41.999000+00:00'
    },
    {
      'name': 'Cataclysm-DDA',
      'owner': 'CleverRaven',
      'description': 'Cataclysm - Dark Days Ahead. A turn-based survival game set in a post-apocalyptic world.',
      'language': 'C++',
      'topics': [
        'cataclysm',
        'c-plus-plus',
        'game',
        'zombies',
        'hacktoberfest'
      ],
      'r_newcomer_resolved': 0.22611245256985169,
      'n_stars': 7057,
      'n_gfis': 463,
      'issue_close_time': 1071072.5,
      'accuracy': 0.7788892721628148,
      'auc': 0.5907816240730701,
      'last_updated': '2022-12-01T08:13:41.400000+00:00'
    },
    {
      'name': 'Elgg',
      'owner': 'Elgg',
      'description': 'A social networking engine in PHP/MySQL',
      'language': 'PHP',
      'topics': [
        'elgg',
        'php',
        'social-networking-engine',
        'framework',
        'hacktoberfest'
      ],
      'r_newcomer_resolved': 0.26540284360189575,
      'n_stars': 1392,
      'n_gfis': 14,
      'issue_close_time': 19987,
      'accuracy': 0.8009478672985783,
      'auc': 0.7744239631336406,
      'last_updated': '2022-12-01T08:13:41.853000+00:00'
    },
    {
      'name': 'Ghost',
      'owner': 'TryGhost',
      'description': 'Turn your audience into a business. Publishing, memberships, subscriptions and newsletters.',
      'language': 'JavaScript',
      'topics': [
        'journalism',
        'publishing',
        'blogging',
        'javascript',
        'web-application',
        'cms',
        'nodejs',
        'ember',
        'ghost',
        'headless-cms',
        'jamstack',
        'creator-economy',
        'hacktoberfest'
      ],
      'r_newcomer_resolved': 0.4834054834054834,
      'n_stars': 40000,
      'n_gfis': 79,
      'issue_close_time': 285135,
      'accuracy': 0.6161616161616161,
      'auc': 0.6414908696739765,
      'last_updated': '2022-12-01T08:13:43.361000+00:00'
    },
    {
      'name': 'Hacktoberfest',
      'owner': 'Showndarya',
      'description': 'A collection of words! :star: it if you :+1: it !',
      'language': 'Python',
      'topics': [
        'hacktoberfest',
        'hacktoberfest2018'
      ],
      'r_newcomer_resolved': 0.0390625,
      'n_stars': 113,
      'n_gfis': 125,
      'issue_close_time': 4036,
      'accuracy': 0.015625,
      'auc': 0.2,
      'last_updated': '2022-12-01T08:13:42.936000+00:00'
    },
    {
      'name': 'Images-to-PDF',
      'owner': 'Swati4star',
      'description': 'An app to convert images to PDF file!',
      'language': 'Java',
      'topics': [
        'pdf',
        'pdf-files',
        'convert-images',
        'jpg',
        'jpg-images',
        'pdf-converter',
        'text-to-pdf',
        'playstore',
        'hacktoberfest'
      ],
      'r_newcomer_resolved': 0.43440233236151604,
      'n_stars': 703,
      'n_gfis': 102,
      'issue_close_time': 404049.5,
      'accuracy': 0.793002915451895,
      'auc': 0.7015844461357504,
      'last_updated': '2022-12-01T08:13:43.222000+00:00'
    },
    {
      'name': 'Leaflet',
      'owner': 'Leaflet',
      'description': '🍃 JavaScript library for mobile-friendly interactive maps 🇺🇦',
      'language': 'JavaScript',
      'topics': [
        'javascript',
        'leaflet',
        'maps',
        'hacktoberfest'
      ],
      'r_newcomer_resolved': 0.20757825370675453,
      'n_stars': 34709,
      'n_gfis': 32,
      'issue_close_time': 171507,
      'accuracy': 0.828665568369028,
      'auc': 0.5983730983730984,
      'last_updated': '2022-12-01T08:13:42.190000+00:00'
    },
    {
      'name': 'MvvmCross',
      'owner': 'MvvmCross',
      'description': 'The .NET MVVM framework for cross-platform solutions, including Xamarin.iOS, Xamarin.Android, Windows and Mac.',
      'language': 'C#',
      'topics': [
        'mvvmcross',
        'c-sharp',
        'xamarin',
        'mvvm',
        'android',
        'dotnet',
        'xamarin-forms',
        'monodroid',
        'nuget',
        'visual-studio',
        'ios',
        'uwp',
        'wpf',
        'monotouch',
        'tvos',
        'macos',
        'mono',
        'mvx'
      ],
      'r_newcomer_resolved': 0.12680115273775217,
      'n_stars': 3650,
      'n_gfis': 17,
      'issue_close_time': 917229,
      'accuracy': 0.8587896253602305,
      'auc': 0.6437143714371437,
      'last_updated': '2022-12-01T08:13:42.267000+00:00'
    },
    {
      'name': 'OpenRA',
      'owner': 'OpenRA',
      'description': 'Open Source real-time strategy game engine for early Westwood games such as Command & Conquer: Red Alert written in C# using SDL and OpenGL. Runs on Windows, Linux, *BSD and Mac OS X.',
      'language': 'C#',
      'topics': [
        'game-engine',
        'strategy-game-engine',
        'csharp',
        'cross-platform',
        'dotnet',
        'openra',
        'game',
        'engine',
        'real-time-strategy',
        'command-and-conquer',
        'red-alert',
        'tiberian-dawn',
        'dune-2000',
        'rts',
        'hacktoberfest'
      ],
      'r_newcomer_resolved': 0.09877913429522753,
      'n_stars': 11480,
      'n_gfis': 36,
      'issue_close_time': 1728651.5,
      'accuracy': 0.9012208657047724,
      'auc': 0.6522250511983174,
      'last_updated': '2022-12-01T08:13:42.379000+00:00'
    }
  ],
  'total': 99,
  'current': 0,
  'size': 10
}

export const issuePagedMock: gfi.GFIPaginated<gfi.GFIBrief> = {
  'code': 200,
  'result': [
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 156803,
      'threshold': 5,
      'probability': 0.9999009370803833,
      'last_updated': '2022-12-01T08:08:29.269000+00:00',
      'created_at': '2022-08-01T06:37:16+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'Interaective Window "compact view" is not compact enough',
      'labels': [
        'polish',
        'under-discussion',
        'interactive-window'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 108722,
      'threshold': 5,
      'probability': 0.9999008178710938,
      'last_updated': '2022-12-01T08:08:33.256000+00:00',
      'created_at': '2020-10-15T08:59:19+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'API to trigger a refresh of the OUTLINE (DocumentSymbols)',
      'labels': [
        'feature-request',
        'api',
        'outline'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 103465,
      'threshold': 5,
      'probability': 0.9998959302902222,
      'last_updated': '2022-12-01T08:08:44.742000+00:00',
      'created_at': '2020-07-28T08:18:46+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'Add score sorting to text search so that search results can be provided by relevance',
      'labels': [
        'feature-request',
        'search',
        'under-discussion',
        'search-api'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 114391,
      'threshold': 5,
      'probability': 0.9998898506164551,
      'last_updated': '2022-12-01T08:08:43.820000+00:00',
      'created_at': '2021-01-15T07:02:52+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'context menu item clicked when right click on right half of activity bar icons',
      'labels': [
        'under-discussion'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 73879,
      'threshold': 5,
      'probability': 0.9998792409896851,
      'last_updated': '2022-12-01T08:08:31.184000+00:00',
      'created_at': '2019-05-17T02:46:18+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'Terminal default font not useful if editor font is proportional',
      'labels': [
        'help wanted',
        'feature-request',
        'good first issue',
        'terminal'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 161942,
      'threshold': 5,
      'probability': 0.999873161315918,
      'last_updated': '2022-12-01T08:08:31.959000+00:00',
      'created_at': '2022-09-27T10:29:08+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'Testing panel- offer to sort by name',
      'labels': [
        'testing'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 111358,
      'threshold': 5,
      'probability': 0.9998730421066284,
      'last_updated': '2022-12-01T08:08:44.100000+00:00',
      'created_at': '2020-11-26T11:35:28+00:00',
      'closed_at': null,
      'state': 'open',
      'title': '[SCM UI] Ability to have "staged" show after "unstaged"',
      'labels': [
        'feature-request',
        'git'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 162512,
      'threshold': 5,
      'probability': 0.9998719692230225,
      'last_updated': '2022-12-01T08:08:31.595000+00:00',
      'created_at': '2022-10-02T08:35:10+00:00',
      'closed_at': null,
      'state': 'open',
      'title': 'TS : error "cannot be used to index type" , but TS valid.',
      'labels': []
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 101249,
      'threshold': 5,
      'probability': 0.9998719692230225,
      'last_updated': '2022-12-01T08:08:44.863000+00:00',
      'created_at': '2020-06-28T22:21:42+00:00',
      'closed_at': null,
      'state': 'open',
      'title': '[css] allow to supress linting warning with ignore comment',
      'labels': [
        'feature-request',
        'css-less-scss'
      ]
    },
    {
      'name': 'vscode',
      'owner': 'microsoft',
      'number': 109548,
      'threshold': 5,
      'probability': 0.9998676776885986,
      'last_updated': '2022-12-01T08:08:44.313000+00:00',
      'created_at': '2020-10-28T01:06:31+00:00',
      'closed_at': null,
      'state': 'open',
      'title': '"Go to Symbol in Workspace..." - searching for symbols using more than one word/substring',
      'labels': [
        'feature-request',
        'workspace-symbols'
      ]
    }
  ],
  'total': 8424,
  'current': 10,
  'size': 10
}

export const repoDynamicsMock: gfi.RepoDynamics = {
  'name': 'vscode',
  'owner': 'microsoft',
  'monthly_commits': [
    {
      'month': '2015-11-01T00:00:00+00:00',
      'count': 556
    },
    {
      'month': '2015-12-01T00:00:00+00:00',
      'count': 834
    },
    {
      'month': '2016-01-01T00:00:00+00:00',
      'count': 1012
    },
    {
      'month': '2016-02-01T00:00:00+00:00',
      'count': 888
    },
    {
      'month': '2016-03-01T00:00:00+00:00',
      'count': 882
    },
    {
      'month': '2016-04-01T00:00:00+00:00',
      'count': 887
    },
    {
      'month': '2016-05-01T00:00:00+00:00',
      'count': 977
    },
    {
      'month': '2016-06-01T00:00:00+00:00',
      'count': 1275
    },
    {
      'month': '2016-07-01T00:00:00+00:00',
      'count': 759
    },
    {
      'month': '2016-08-01T00:00:00+00:00',
      'count': 1040
    },
    {
      'month': '2016-09-01T00:00:00+00:00',
      'count': 1129
    },
    {
      'month': '2016-10-01T00:00:00+00:00',
      'count': 1127
    },
    {
      'month': '2016-11-01T00:00:00+00:00',
      'count': 1127
    },
    {
      'month': '2016-12-01T00:00:00+00:00',
      'count': 901
    },
    {
      'month': '2017-01-01T00:00:00+00:00',
      'count': 1354
    },
    {
      'month': '2017-02-01T00:00:00+00:00',
      'count': 1064
    },
    {
      'month': '2017-03-01T00:00:00+00:00',
      'count': 1367
    },
    {
      'month': '2017-04-01T00:00:00+00:00',
      'count': 887
    },
    {
      'month': '2017-05-01T00:00:00+00:00',
      'count': 1410
    },
    {
      'month': '2017-06-01T00:00:00+00:00',
      'count': 1427
    },
    {
      'month': '2017-07-01T00:00:00+00:00',
      'count': 1167
    },
    {
      'month': '2017-08-01T00:00:00+00:00',
      'count': 993
    },
    {
      'month': '2017-09-01T00:00:00+00:00',
      'count': 1331
    },
    {
      'month': '2017-10-01T00:00:00+00:00',
      'count': 1251
    },
    {
      'month': '2017-11-01T00:00:00+00:00',
      'count': 1302
    },
    {
      'month': '2017-12-01T00:00:00+00:00',
      'count': 1007
    },
    {
      'month': '2018-01-01T00:00:00+00:00',
      'count': 1252
    },
    {
      'month': '2018-02-01T00:00:00+00:00',
      'count': 1234
    },
    {
      'month': '2018-03-01T00:00:00+00:00',
      'count': 1473
    },
    {
      'month': '2018-04-01T00:00:00+00:00',
      'count': 1475
    },
    {
      'month': '2018-05-01T00:00:00+00:00',
      'count': 1520
    },
    {
      'month': '2018-06-01T00:00:00+00:00',
      'count': 1470
    },
    {
      'month': '2018-07-01T00:00:00+00:00',
      'count': 1399
    },
    {
      'month': '2018-08-01T00:00:00+00:00',
      'count': 1276
    },
    {
      'month': '2018-09-01T00:00:00+00:00',
      'count': 1380
    },
    {
      'month': '2018-10-01T00:00:00+00:00',
      'count': 1541
    },
    {
      'month': '2018-11-01T00:00:00+00:00',
      'count': 1193
    },
    {
      'month': '2018-12-01T00:00:00+00:00',
      'count': 1074
    },
    {
      'month': '2019-01-01T00:00:00+00:00',
      'count': 1237
    },
    {
      'month': '2019-02-01T00:00:00+00:00',
      'count': 1122
    },
    {
      'month': '2019-03-01T00:00:00+00:00',
      'count': 1390
    },
    {
      'month': '2019-04-01T00:00:00+00:00',
      'count': 985
    },
    {
      'month': '2019-05-01T00:00:00+00:00',
      'count': 745
    },
    {
      'month': '2019-06-01T00:00:00+00:00',
      'count': 1272
    },
    {
      'month': '2019-07-01T00:00:00+00:00',
      'count': 1620
    },
    {
      'month': '2019-08-01T00:00:00+00:00',
      'count': 1299
    },
    {
      'month': '2019-09-01T00:00:00+00:00',
      'count': 1306
    },
    {
      'month': '2019-10-01T00:00:00+00:00',
      'count': 1473
    },
    {
      'month': '2019-11-01T00:00:00+00:00',
      'count': 1455
    },
    {
      'month': '2019-12-01T00:00:00+00:00',
      'count': 953
    },
    {
      'month': '2020-01-01T00:00:00+00:00',
      'count': 1376
    },
    {
      'month': '2020-02-01T00:00:00+00:00',
      'count': 1594
    },
    {
      'month': '2020-03-01T00:00:00+00:00',
      'count': 1496
    },
    {
      'month': '2020-04-01T00:00:00+00:00',
      'count': 1679
    },
    {
      'month': '2020-05-01T00:00:00+00:00',
      'count': 1295
    },
    {
      'month': '2020-06-01T00:00:00+00:00',
      'count': 1507
    },
    {
      'month': '2020-07-01T00:00:00+00:00',
      'count': 1090
    },
    {
      'month': '2020-08-01T00:00:00+00:00',
      'count': 1050
    },
    {
      'month': '2020-09-01T00:00:00+00:00',
      'count': 1173
    },
    {
      'month': '2020-10-01T00:00:00+00:00',
      'count': 987
    },
    {
      'month': '2020-11-01T00:00:00+00:00',
      'count': 1371
    },
    {
      'month': '2020-12-01T00:00:00+00:00',
      'count': 1123
    },
    {
      'month': '2021-01-01T00:00:00+00:00',
      'count': 1292
    },
    {
      'month': '2021-02-01T00:00:00+00:00',
      'count': 1630
    },
    {
      'month': '2021-03-01T00:00:00+00:00',
      'count': 1638
    },
    {
      'month': '2021-04-01T00:00:00+00:00',
      'count': 1886
    },
    {
      'month': '2021-05-01T00:00:00+00:00',
      'count': 1688
    },
    {
      'month': '2021-06-01T00:00:00+00:00',
      'count': 1668
    },
    {
      'month': '2021-07-01T00:00:00+00:00',
      'count': 1200
    },
    {
      'month': '2021-08-01T00:00:00+00:00',
      'count': 1107
    },
    {
      'month': '2021-09-01T00:00:00+00:00',
      'count': 1162
    },
    {
      'month': '2021-10-01T00:00:00+00:00',
      'count': 922
    },
    {
      'month': '2021-11-01T00:00:00+00:00',
      'count': 1262
    },
    {
      'month': '2021-12-01T00:00:00+00:00',
      'count': 800
    },
    {
      'month': '2022-01-01T00:00:00+00:00',
      'count': 1413
    },
    {
      'month': '2022-02-01T00:00:00+00:00',
      'count': 1314
    },
    {
      'month': '2022-03-01T00:00:00+00:00',
      'count': 1502
    },
    {
      'month': '2022-04-01T00:00:00+00:00',
      'count': 814
    },
    {
      'month': '2022-05-01T00:00:00+00:00',
      'count': 908
    },
    {
      'month': '2022-06-01T00:00:00+00:00',
      'count': 1132
    },
    {
      'month': '2022-07-01T00:00:00+00:00',
      'count': 986
    },
    {
      'month': '2022-08-01T00:00:00+00:00',
      'count': 980
    },
    {
      'month': '2022-09-01T00:00:00+00:00',
      'count': 821
    },
    {
      'month': '2022-10-01T00:00:00+00:00',
      'count': 806
    }
  ],
  'monthly_issues': [
    {
      'month': '2015-10-01T00:00:00+00:00',
      'count': 1
    },
    {
      'month': '2015-11-01T00:00:00+00:00',
      'count': 751
    },
    {
      'month': '2015-12-01T00:00:00+00:00',
      'count': 827
    },
    {
      'month': '2016-01-01T00:00:00+00:00',
      'count': 823
    },
    {
      'month': '2016-02-01T00:00:00+00:00',
      'count': 921
    },
    {
      'month': '2016-03-01T00:00:00+00:00',
      'count': 1209
    },
    {
      'month': '2016-04-01T00:00:00+00:00',
      'count': 1107
    },
    {
      'month': '2016-05-01T00:00:00+00:00',
      'count': 1013
    },
    {
      'month': '2016-06-01T00:00:00+00:00',
      'count': 1431
    },
    {
      'month': '2016-07-01T00:00:00+00:00',
      'count': 1326
    },
    {
      'month': '2016-08-01T00:00:00+00:00',
      'count': 1274
    },
    {
      'month': '2016-09-01T00:00:00+00:00',
      'count': 1657
    },
    {
      'month': '2016-10-01T00:00:00+00:00',
      'count': 1588
    },
    {
      'month': '2016-11-01T00:00:00+00:00',
      'count': 1401
    },
    {
      'month': '2016-12-01T00:00:00+00:00',
      'count': 1554
    },
    {
      'month': '2017-01-01T00:00:00+00:00',
      'count': 1542
    },
    {
      'month': '2017-02-01T00:00:00+00:00',
      'count': 1801
    },
    {
      'month': '2017-03-01T00:00:00+00:00',
      'count': 2050
    },
    {
      'month': '2017-04-01T00:00:00+00:00',
      'count': 1817
    },
    {
      'month': '2017-05-01T00:00:00+00:00',
      'count': 1939
    },
    {
      'month': '2017-06-01T00:00:00+00:00',
      'count': 2043
    },
    {
      'month': '2017-07-01T00:00:00+00:00',
      'count': 1702
    },
    {
      'month': '2017-08-01T00:00:00+00:00',
      'count': 1728
    },
    {
      'month': '2017-09-01T00:00:00+00:00',
      'count': 1714
    },
    {
      'month': '2017-10-01T00:00:00+00:00',
      'count': 1787
    },
    {
      'month': '2017-11-01T00:00:00+00:00',
      'count': 1889
    },
    {
      'month': '2017-12-01T00:00:00+00:00',
      'count': 1487
    },
    {
      'month': '2018-01-01T00:00:00+00:00',
      'count': 1569
    },
    {
      'month': '2018-02-01T00:00:00+00:00',
      'count': 1926
    },
    {
      'month': '2018-03-01T00:00:00+00:00',
      'count': 2085
    },
    {
      'month': '2018-04-01T00:00:00+00:00',
      'count': 1812
    },
    {
      'month': '2018-05-01T00:00:00+00:00',
      'count': 1797
    },
    {
      'month': '2018-06-01T00:00:00+00:00',
      'count': 2327
    },
    {
      'month': '2018-07-01T00:00:00+00:00',
      'count': 1970
    },
    {
      'month': '2018-08-01T00:00:00+00:00',
      'count': 2003
    },
    {
      'month': '2018-09-01T00:00:00+00:00',
      'count': 1798
    },
    {
      'month': '2018-10-01T00:00:00+00:00',
      'count': 2218
    },
    {
      'month': '2018-11-01T00:00:00+00:00',
      'count': 1577
    },
    {
      'month': '2018-12-01T00:00:00+00:00',
      'count': 1555
    },
    {
      'month': '2019-01-01T00:00:00+00:00',
      'count': 1624
    },
    {
      'month': '2019-02-01T00:00:00+00:00',
      'count': 1738
    },
    {
      'month': '2019-03-01T00:00:00+00:00',
      'count': 1690
    },
    {
      'month': '2019-04-01T00:00:00+00:00',
      'count': 1377
    },
    {
      'month': '2019-05-01T00:00:00+00:00',
      'count': 1344
    },
    {
      'month': '2019-06-01T00:00:00+00:00',
      'count': 1448
    },
    {
      'month': '2019-07-01T00:00:00+00:00',
      'count': 1679
    },
    {
      'month': '2019-08-01T00:00:00+00:00',
      'count': 1658
    },
    {
      'month': '2019-09-01T00:00:00+00:00',
      'count': 1332
    },
    {
      'month': '2019-10-01T00:00:00+00:00',
      'count': 1824
    },
    {
      'month': '2019-11-01T00:00:00+00:00',
      'count': 1813
    },
    {
      'month': '2019-12-01T00:00:00+00:00',
      'count': 1833
    },
    {
      'month': '2020-01-01T00:00:00+00:00',
      'count': 1701
    },
    {
      'month': '2020-02-01T00:00:00+00:00',
      'count': 1760
    },
    {
      'month': '2020-03-01T00:00:00+00:00',
      'count': 2040
    },
    {
      'month': '2020-04-01T00:00:00+00:00',
      'count': 2372
    },
    {
      'month': '2020-05-01T00:00:00+00:00',
      'count': 1910
    },
    {
      'month': '2020-06-01T00:00:00+00:00',
      'count': 2246
    },
    {
      'month': '2020-07-01T00:00:00+00:00',
      'count': 2032
    },
    {
      'month': '2020-08-01T00:00:00+00:00',
      'count': 1820
    },
    {
      'month': '2020-09-01T00:00:00+00:00',
      'count': 1867
    },
    {
      'month': '2020-10-01T00:00:00+00:00',
      'count': 1722
    },
    {
      'month': '2020-11-01T00:00:00+00:00',
      'count': 1536
    },
    {
      'month': '2020-12-01T00:00:00+00:00',
      'count': 1605
    },
    {
      'month': '2021-01-01T00:00:00+00:00',
      'count': 1585
    },
    {
      'month': '2021-02-01T00:00:00+00:00',
      'count': 2095
    },
    {
      'month': '2021-03-01T00:00:00+00:00',
      'count': 2086
    },
    {
      'month': '2021-04-01T00:00:00+00:00',
      'count': 2213
    },
    {
      'month': '2021-05-01T00:00:00+00:00',
      'count': 1872
    },
    {
      'month': '2021-06-01T00:00:00+00:00',
      'count': 2357
    },
    {
      'month': '2021-07-01T00:00:00+00:00',
      'count': 1874
    },
    {
      'month': '2021-08-01T00:00:00+00:00',
      'count': 1811
    },
    {
      'month': '2021-09-01T00:00:00+00:00',
      'count': 1905
    },
    {
      'month': '2021-10-01T00:00:00+00:00',
      'count': 1659
    },
    {
      'month': '2021-11-01T00:00:00+00:00',
      'count': 1730
    },
    {
      'month': '2021-12-01T00:00:00+00:00',
      'count': 1499
    },
    {
      'month': '2022-01-01T00:00:00+00:00',
      'count': 1668
    },
    {
      'month': '2022-02-01T00:00:00+00:00',
      'count': 1906
    },
    {
      'month': '2022-03-01T00:00:00+00:00',
      'count': 1942
    },
    {
      'month': '2022-04-01T00:00:00+00:00',
      'count': 1725
    },
    {
      'month': '2022-05-01T00:00:00+00:00',
      'count': 1767
    },
    {
      'month': '2022-06-01T00:00:00+00:00',
      'count': 1921
    },
    {
      'month': '2022-07-01T00:00:00+00:00',
      'count': 2046
    },
    {
      'month': '2022-08-01T00:00:00+00:00',
      'count': 2117
    },
    {
      'month': '2022-09-01T00:00:00+00:00',
      'count': 1937
    },
    {
      'month': '2022-10-01T00:00:00+00:00',
      'count': 1518
    }
  ],
  'monthly_pulls': [
    {
      'month': '2015-11-01T00:00:00+00:00',
      'count': 85
    },
    {
      'month': '2015-12-01T00:00:00+00:00',
      'count': 59
    },
    {
      'month': '2016-01-01T00:00:00+00:00',
      'count': 44
    },
    {
      'month': '2016-02-01T00:00:00+00:00',
      'count': 55
    },
    {
      'month': '2016-03-01T00:00:00+00:00',
      'count': 57
    },
    {
      'month': '2016-04-01T00:00:00+00:00',
      'count': 72
    },
    {
      'month': '2016-05-01T00:00:00+00:00',
      'count': 50
    },
    {
      'month': '2016-06-01T00:00:00+00:00',
      'count': 78
    },
    {
      'month': '2016-07-01T00:00:00+00:00',
      'count': 77
    },
    {
      'month': '2016-08-01T00:00:00+00:00',
      'count': 81
    },
    {
      'month': '2016-09-01T00:00:00+00:00',
      'count': 93
    },
    {
      'month': '2016-10-01T00:00:00+00:00',
      'count': 83
    },
    {
      'month': '2016-11-01T00:00:00+00:00',
      'count': 113
    },
    {
      'month': '2016-12-01T00:00:00+00:00',
      'count': 123
    },
    {
      'month': '2017-01-01T00:00:00+00:00',
      'count': 132
    },
    {
      'month': '2017-02-01T00:00:00+00:00',
      'count': 125
    },
    {
      'month': '2017-03-01T00:00:00+00:00',
      'count': 142
    },
    {
      'month': '2017-04-01T00:00:00+00:00',
      'count': 116
    },
    {
      'month': '2017-05-01T00:00:00+00:00',
      'count': 136
    },
    {
      'month': '2017-06-01T00:00:00+00:00',
      'count': 136
    },
    {
      'month': '2017-07-01T00:00:00+00:00',
      'count': 102
    },
    {
      'month': '2017-08-01T00:00:00+00:00',
      'count': 105
    },
    {
      'month': '2017-09-01T00:00:00+00:00',
      'count': 100
    },
    {
      'month': '2017-10-01T00:00:00+00:00',
      'count': 126
    },
    {
      'month': '2017-11-01T00:00:00+00:00',
      'count': 131
    },
    {
      'month': '2017-12-01T00:00:00+00:00',
      'count': 119
    },
    {
      'month': '2018-01-01T00:00:00+00:00',
      'count': 115
    },
    {
      'month': '2018-02-01T00:00:00+00:00',
      'count': 127
    },
    {
      'month': '2018-03-01T00:00:00+00:00',
      'count': 155
    },
    {
      'month': '2018-04-01T00:00:00+00:00',
      'count': 114
    },
    {
      'month': '2018-05-01T00:00:00+00:00',
      'count': 125
    },
    {
      'month': '2018-06-01T00:00:00+00:00',
      'count': 143
    },
    {
      'month': '2018-07-01T00:00:00+00:00',
      'count': 166
    },
    {
      'month': '2018-08-01T00:00:00+00:00',
      'count': 170
    },
    {
      'month': '2018-09-01T00:00:00+00:00',
      'count': 169
    },
    {
      'month': '2018-10-01T00:00:00+00:00',
      'count': 363
    },
    {
      'month': '2018-11-01T00:00:00+00:00',
      'count': 131
    },
    {
      'month': '2018-12-01T00:00:00+00:00',
      'count': 169
    },
    {
      'month': '2019-01-01T00:00:00+00:00',
      'count': 142
    },
    {
      'month': '2019-02-01T00:00:00+00:00',
      'count': 134
    },
    {
      'month': '2019-03-01T00:00:00+00:00',
      'count': 159
    },
    {
      'month': '2019-04-01T00:00:00+00:00',
      'count': 170
    },
    {
      'month': '2019-05-01T00:00:00+00:00',
      'count': 164
    },
    {
      'month': '2019-06-01T00:00:00+00:00',
      'count': 139
    },
    {
      'month': '2019-07-01T00:00:00+00:00',
      'count': 204
    },
    {
      'month': '2019-08-01T00:00:00+00:00',
      'count': 174
    },
    {
      'month': '2019-09-01T00:00:00+00:00',
      'count': 154
    },
    {
      'month': '2019-10-01T00:00:00+00:00',
      'count': 212
    },
    {
      'month': '2019-11-01T00:00:00+00:00',
      'count': 200
    },
    {
      'month': '2019-12-01T00:00:00+00:00',
      'count': 124
    },
    {
      'month': '2020-01-01T00:00:00+00:00',
      'count': 119
    },
    {
      'month': '2020-02-01T00:00:00+00:00',
      'count': 185
    },
    {
      'month': '2020-03-01T00:00:00+00:00',
      'count': 145
    },
    {
      'month': '2020-04-01T00:00:00+00:00',
      'count': 207
    },
    {
      'month': '2020-05-01T00:00:00+00:00',
      'count': 186
    },
    {
      'month': '2020-06-01T00:00:00+00:00',
      'count': 182
    },
    {
      'month': '2020-07-01T00:00:00+00:00',
      'count': 174
    },
    {
      'month': '2020-08-01T00:00:00+00:00',
      'count': 162
    },
    {
      'month': '2020-09-01T00:00:00+00:00',
      'count': 143
    },
    {
      'month': '2020-10-01T00:00:00+00:00',
      'count': 158
    },
    {
      'month': '2020-11-01T00:00:00+00:00',
      'count': 151
    },
    {
      'month': '2020-12-01T00:00:00+00:00',
      'count': 158
    },
    {
      'month': '2021-01-01T00:00:00+00:00',
      'count': 203
    },
    {
      'month': '2021-02-01T00:00:00+00:00',
      'count': 213
    },
    {
      'month': '2021-03-01T00:00:00+00:00',
      'count': 252
    },
    {
      'month': '2021-04-01T00:00:00+00:00',
      'count': 213
    },
    {
      'month': '2021-05-01T00:00:00+00:00',
      'count': 250
    },
    {
      'month': '2021-06-01T00:00:00+00:00',
      'count': 250
    },
    {
      'month': '2021-07-01T00:00:00+00:00',
      'count': 199
    },
    {
      'month': '2021-08-01T00:00:00+00:00',
      'count': 202
    },
    {
      'month': '2021-09-01T00:00:00+00:00',
      'count': 199
    },
    {
      'month': '2021-10-01T00:00:00+00:00',
      'count': 177
    },
    {
      'month': '2021-11-01T00:00:00+00:00',
      'count': 192
    },
    {
      'month': '2021-12-01T00:00:00+00:00',
      'count': 179
    },
    {
      'month': '2022-01-01T00:00:00+00:00',
      'count': 181
    },
    {
      'month': '2022-02-01T00:00:00+00:00',
      'count': 210
    },
    {
      'month': '2022-03-01T00:00:00+00:00',
      'count': 302
    },
    {
      'month': '2022-04-01T00:00:00+00:00',
      'count': 202
    },
    {
      'month': '2022-05-01T00:00:00+00:00',
      'count': 582
    },
    {
      'month': '2022-06-01T00:00:00+00:00',
      'count': 890
    },
    {
      'month': '2022-07-01T00:00:00+00:00',
      'count': 742
    },
    {
      'month': '2022-08-01T00:00:00+00:00',
      'count': 770
    },
    {
      'month': '2022-09-01T00:00:00+00:00',
      'count': 749
    },
    {
      'month': '2022-10-01T00:00:00+00:00',
      'count': 736
    }
  ]
}
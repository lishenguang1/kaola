/*
Navicat MySQL Data Transfer

Source Server         : 这是主机
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : kaola

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-09-28 10:54:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `introduce` longtext,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'JAYJUN 水光悦颜花漾定制礼盒 共15片', 'https://haitao.nos.netease.com/31999a6002aa4de48783b9923830811b1565263633223jz2ljx2m11779.jpg?imageView&thumbnail=305x305&quality=95&type=webp', '韩国美妆圈的爆款面膜，轻轻松松一盒全打尽~水光面膜卓效补水，肌肤绽放水光；樱花焕白面膜，白皙亮肤；水光植物面膜细致弹嫩，补充肌肤能量；新生透白面膜改善污染造成的伤害；新生舒缓面膜，有助于修护肌肤屏障', '88.00', '8');
INSERT INTO `list` VALUES ('2', 'Kiehl\'s 科颜氏 高保湿清爽面霜 50毫升 清爽无油', 'https://haitao.nos.netease.com/07a2546f58cc4b26b176c8ccc7945fd31568277458409k0gfwnh110696.jpg?imageView&thumbnail=305x305&quality=95&type=webp', '科家的保湿面霜明星款，滋润轻薄打造肌肤水嫩超魅力。特别适合中性偏油肤质，油性肤质，啫喱质地非常清爽，渗入保水、活化肌肤、持续保湿、集中补水的同时，能明显减少脸部出油，使肌肤恢复自然油水平衡。', '95.00', '12');
INSERT INTO `list` VALUES ('3', 'Avène 雅漾 舒护活泉水喷雾 300毫升 舒缓保湿 水润定妆', 'https://haitao.nosdn1.127.net/5a7f1894892b42758df2907976bcd3361558340427811jvw3nll811302.jpg?imageView&thumbnail=305x305&quality=95&type=webp', '化妆台常备，敏感肌的维稳利器！成分简单粗暴，就是单纯的雅漾活泉水和用来保鲜的氮气，喷雾设计，干净又卫生，细腻如丝，吸收也快！不管春夏秋冬，皮肤干燥敏感或晒伤晒红，轻轻一喷，不适现象立刻迎刃而解！', '56.00', '22');
INSERT INTO `list` VALUES ('4', 'ALBION 奥尔滨 爽肤精华液健康水 330毫升 保湿消闭口', 'https://haitao.nosdn1.127.net/aee462d4d52c41cc82fcfdd00e15558c1548306054729jra5g5rq10933.jpg?imageView&thumbnail=305x305&quality=95&type=webp', '日本四大圣水之一！闭口痘痘救星！油皮妹子控油法宝！靠实力风靡亚洲！打开是淡淡香气，清爽的液体为肌肤注入源源的水动力。当闭口肆虐的时候，配合化妆棉湿敷能让痘痘通通退散！夏日油光满面，有它也能轻松维稳。', '33.80', '15');
INSERT INTO `list` VALUES ('5', 'LANCÔME 兰蔻玫瑰露清滢柔肤水 200毫升/瓶 2瓶装', 'https://haitao.nos.netease.com/17d121c78389445aad45476d2dc265e91566366637156jzku94cv12275.jpg?imageView&thumbnail=800x0&quality=85', '【新老包装随机发货，目前新包装与页面展示均有差异】夏季的烈日，冬季的妖风都让干皮妹子们深深苦恼。这瓶兰蔻粉水专为干燥肌肤而设，上脸后轻轻拍打几下就被肌肤吸收，用完后感觉肌肤亮了一个度，水润又饱满~', '398.00', '11');
INSERT INTO `list` VALUES ('6', 'FANCL 芳珂 无添加净化卸妆油 120毫升', 'https://haitao.nos.netease.com/1d6vetkfd89_800_800.jpg?imageView&thumbnail=800x0&quality=85', '敏感肌专属，常年的comse大赏人气得主！在脸上按摩很舒服，乳化的速度也特别快，温和又不失卸妆力，眼周肌肤均可使用，油脂和残留的彩妆，统统都可以卸干净，洗后脸上很清爽，痘痘肌肤首选！', '115.00', '8');
INSERT INTO `list` VALUES ('7', 'Kao 花王 Curél珂润润浸保湿洁颜泡沫 150毫升 任何肤质都hold住', 'https://haitao.nos.netease.com/7eb32837b6e148d286a9778a1af601f11546483770313jqg0i9xt10411.jpg?imageView&thumbnail=800x0&quality=85', '白菜有真爱，实力宠出零敏肌！日本Cosme网评价炒鸡高！丰富奶油状泡沫轻松洗净，丰厚的神经酰胺拯救泛红干燥的敏感肤质，温和的甘油成分，保持肌肤本身滋润成分不流失。换季御“肤”术，让肌肤也做做深呼吸。', '75.00', '11');
INSERT INTO `list` VALUES ('8', 'Kanebo 佳丽宝 Suisai酵母酵素洗颜粉 32粒 Cosme前三', 'https://haitao.nosdn1.127.net/b8ac7c4377c64ce4a6d6ccf228083f721564553918244jyqv09hn10585.jpg?imageView&thumbnail=800x0&quality=85', '【新老包、版本二随机发货】COSME大赏第三名，洗颜粉界明星产品，黑头党的福音，却具有去除黑头、角质的强大功效，还可以改善皮肤暗沉粗糙，毛孔粗大，洗后光滑不紧绷，真正做到彻底清洁和滋润护肤的结合！', '102.00', '20');
INSERT INTO `list` VALUES ('9', '【韩国爱茉莉直供】HAPPY BATH 自然主义玫瑰精华柔滑保湿沐浴露 500克/瓶', 'https://haitao.nosdn2.127.net/onlineielbfu5y13350.jpg?imageView&thumbnail=243x243&quality=95&type=webp', 'HAPPY BATH 自然主义玫瑰精华柔滑保湿沐浴露，含有天然清洁的提取物，对肌肤零刺激，洗完就像泡了玫瑰浴哦~适合全家人一起使用', '79.00', '15');
INSERT INTO `list` VALUES ('10', 'Amore 爱茉莉 美妆仙护发精油 70毫升 星你女神同款', 'https://haitao.nosdn2.127.net/38c5e155c1bb45d3ba0b0a518e0ceae31542866484282jos6vabu10687.jpg?imageView&thumbnail=243x243&quality=95&type=webp', '【商品包装更新，随机发货哦~】星你女神同款，顺滑滋润，爱茉莉美仙精华护发油，给你的秀发直达发芯的滋养，抚平毛躁，做自己的女神，顺自己！', '69.00', '13');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tel` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('1', '123456@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('2', '12346@qq.com', '', null, null);
INSERT INTO `register` VALUES ('3', '1234567@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('4', '12345678@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('5', '123456789@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('6', '0123456789@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('7', '111111@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('8', '1234567899@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('9', '12345678999@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('10', '123456789999@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('11', '1111111@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('12', '1234567899999@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('13', '123123@qq.com', '123123', null, null);
INSERT INTO `register` VALUES ('14', '123123123@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('15', '12341234@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('16', '1234566@qq.com', '123456', null, null);
INSERT INTO `register` VALUES ('17', '123123123123@qq.com', '123456', null, null);

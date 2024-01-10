
const config = {
  /** 是否使用mock代替api返回 */
  useMock: true,
};
/** 获取首页数据 */
function mockFetchHome() {
  const { delay } = require('../utils/util');
  return delay().then(() => {
    return {
      activityImg: 'https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-mp/activity/banner.png',
      swiper: [
				// 'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png',
				'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png',
				'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png',
				'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png',
				'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png',
				'https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png',
			],
      nav:[
        // {
        // 		imgurl:"http://edu-image.nosdn.127.net/A0ED3BAF7A2572B19FD7FF1ECF71C21C.jpg",
        // 		
        // 		title:"微专业"
        // },
        {
            imgurl:"http://edu-image.nosdn.127.net/24c80eb7-148d-4520-92b3-19de174561d2.jpg",
            
            title:"互联网"
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/65ECBB4D91707E1BF49A8757F01909AC.jpg",
            
            title:"设计创作"
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/1da4c76a-e2be-4474-bd27-f8167b338b670.jpg",
            
            title:"职场/金融"
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/4e2c978b-b1a4-4258-836a-1815c4894ad4.jpg",
            
            title:"兴趣生活"
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/2EF8DA3AEB2B91D100E649D651426F46.jpg",
            
            title:"语言/留学"
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/edf60979-e0fd-42ae-b8ca-9558232ab289.jpg",
            
            title:"中小学"
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/C23BB54D90D7E22754C91959B36B9461.jpg",
            
            title:"考试认证"
        }
      ],
      ad:[
        {
            imgurl:"http://edu-image.nosdn.127.net/d94cabd8-62c5-4bbe-90c9-8acd1dc293a2.jpg"
        },{
            imgurl:"http://edu-image.nosdn.127.net/0fe88418-0162-4967-af87-e189c0dc47ed.jpg"
        },{
          imgurl:"http://edu-image.nosdn.127.net/0fe88418-0162-4967-af87-e189c0dc47ed.jpg"
        }
      ],
      banner:[
        {
            imgurl:"http://edu-image.nosdn.127.net/c5064b6d-a0ab-4f9c-9982-c963d7420882.jpg",
            
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/3B1D0D4AC10815212E54EFE41778B8AA.jpg",
            
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/03568d83-32fb-4d6c-ae04-c64b346fe2a2.jpg",
            
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/7A90F82CD5464E306B95AC158E90F8B6.jpg",
            
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/5348B382098E03D958B8A8ED3FEB4182.png",
            
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/40680a35-a866-4ff7-9032-17f8f6f43a24.jpg",
            
        },
        {
            imgurl:"http://edu-image.nosdn.127.net/1D821F1ACACC2610AF4768D0E850083B.jpg",
            
        }
      ]
    };
  });
}


/** 获取首页数据 */
export function fetchHome() {
  if (config.useMock) {
    return mockFetchHome();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}

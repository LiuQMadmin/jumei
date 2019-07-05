module.exports = {
    devServer: {
      proxy: {
        '/index': {
          target: 'http://h5.jumei.com',
          changeOrigin: true,
          onProxyReq(proxyReq, req, res) {
            proxyReq.setHeader('cookie', 'default_site_25=gz; _adwr=265569940%23https%253A%252F%252Fwww.baidu.com%252Flink%253Furl%253D9LQ7V6kSUBTFmz3p58yMQd9OEMStGDdLqnXV_lIMva7%2526wd%253D%2526eqid%253D9e30632600002b75000000035d023bd9; __utma=1.1546210800.1559647672.1559647672.1560427486.2; __utmz=1.1560427486.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; Hm_lvt_884477732c15fb2f2416fb892282394b=1559647672,1560427486; __xsptplus428=428.2.1560427486.1560427486.1%232%7Cwww.baidu.com%7C%7C%7C%7C%23%23R3VbELvGY9P3tR0dlxTo9MTA0nx9hnc5%23; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2216b223efa019-03153981b8dbf9-2d604637-250125-16b223efa029b%22%7D; device_platform=iphone; guide_download_show=1; jml14=2; jmdl14=2; IsCookieUid_USER_CS_COOKIE_UID_=FALSE; cookie_uid=15604274849805937185; referer_site=www.baidu.com; abt52=new; abt62=old; PHPSESSID=6pqpbcobbnbofkjbd8svc0udp0; _adwb=265569940; _adwc=265569940; _adwp=265569940.8315961200.1559647671.1559647671.1560427485.2; __utmb=1.2.9.1560427488840; __utmc=1; Hm_lpvt_884477732c15fb2f2416fb892282394b=1560427506; __xsptplusUT_428=1; newCash=1; frwap=wap; has_download=1; sid=6pqpbcobbnbofkjbd8svc0udp0; route=25cdabaf22fa7345f80ba1a695a3f319; TY_SESSION_ID=3b9a998d-38b9-4bf9-8ddf-76bb22b1521c');
          }

        }
      }
    }
  }
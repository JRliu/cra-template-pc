/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import Iconshouqi from './Iconshouqi';
import Iconzhankai from './Iconzhankai';
import Iconguanbi from './Iconguanbi';
import Iconbiaogeicon from './Iconbiaogeicon';
import Iconshangchuanzhong from './Iconshangchuanzhong';
import Iconqingchu from './Iconqingchu';
import Iconbianji from './Iconbianji';
import IconmendianshujuYixuan from './IconmendianshujuYixuan';
import IconmendianshujuYixuanbeifen from './IconmendianshujuYixuanbeifen';
import IconpeizhiguanliYixuan from './IconpeizhiguanliYixuan';
import IconshujudaoruMoren from './IconshujudaoruMoren';
import IconyuangongshujuMoren from './IconyuangongshujuMoren';
import IconpeizhiguanliMoren from './IconpeizhiguanliMoren';
import IconyuangongshujuYixuan from './IconyuangongshujuYixuan';
import IconshujudaoruYixuan from './IconshujudaoruYixuan';
import IconzhuangkuangpingjiaZhongbulashen from './IconzhuangkuangpingjiaZhongbulashen';
import IconzhuangkuangpingjiaDibujiaocha from './IconzhuangkuangpingjiaDibujiaocha';
import IconzhuangkuangpingjiaDingbujiaocha from './IconzhuangkuangpingjiaDingbujiaocha';
import Iconyinzhang from './Iconyinzhang';
import Iconhuanyuan from './Iconhuanyuan';
import IconlogohengbanLanse from './IconlogohengbanLanse';
import Iconyouxiu from './Iconyouxiu';
import Iconjinggao from './Iconjinggao';

export type IconNames = 'shouqi' | 'zhankai' | 'guanbi' | 'biaogeicon' | 'shangchuanzhong' | 'qingchu' | 'bianji' | 'mendianshuju-yixuan' | 'mendianshuju-yixuanbeifen' | 'peizhiguanli-yixuan' | 'shujudaoru-moren' | 'yuangongshuju-moren' | 'peizhiguanli-moren' | 'yuangongshuju-yixuan' | 'shujudaoru-yixuan' | 'zhuangkuangpingjia-zhongbulashen' | 'zhuangkuangpingjia-dibujiaocha' | 'zhuangkuangpingjia-dingbujiaocha' | 'yinzhang' | 'huanyuan' | 'logohengban-lanse' | 'youxiu' | 'jinggao';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'shouqi':
      return <Iconshouqi {...rest} />;
    case 'zhankai':
      return <Iconzhankai {...rest} />;
    case 'guanbi':
      return <Iconguanbi {...rest} />;
    case 'biaogeicon':
      return <Iconbiaogeicon {...rest} />;
    case 'shangchuanzhong':
      return <Iconshangchuanzhong {...rest} />;
    case 'qingchu':
      return <Iconqingchu {...rest} />;
    case 'bianji':
      return <Iconbianji {...rest} />;
    case 'mendianshuju-yixuan':
      return <IconmendianshujuYixuan {...rest} />;
    case 'mendianshuju-yixuanbeifen':
      return <IconmendianshujuYixuanbeifen {...rest} />;
    case 'peizhiguanli-yixuan':
      return <IconpeizhiguanliYixuan {...rest} />;
    case 'shujudaoru-moren':
      return <IconshujudaoruMoren {...rest} />;
    case 'yuangongshuju-moren':
      return <IconyuangongshujuMoren {...rest} />;
    case 'peizhiguanli-moren':
      return <IconpeizhiguanliMoren {...rest} />;
    case 'yuangongshuju-yixuan':
      return <IconyuangongshujuYixuan {...rest} />;
    case 'shujudaoru-yixuan':
      return <IconshujudaoruYixuan {...rest} />;
    case 'zhuangkuangpingjia-zhongbulashen':
      return <IconzhuangkuangpingjiaZhongbulashen {...rest} />;
    case 'zhuangkuangpingjia-dibujiaocha':
      return <IconzhuangkuangpingjiaDibujiaocha {...rest} />;
    case 'zhuangkuangpingjia-dingbujiaocha':
      return <IconzhuangkuangpingjiaDingbujiaocha {...rest} />;
    case 'yinzhang':
      return <Iconyinzhang {...rest} />;
    case 'huanyuan':
      return <Iconhuanyuan {...rest} />;
    case 'logohengban-lanse':
      return <IconlogohengbanLanse {...rest} />;
    case 'youxiu':
      return <Iconyouxiu {...rest} />;
    case 'jinggao':
      return <Iconjinggao {...rest} />;

  }

  return null;
};

export default IconFont;

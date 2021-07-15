import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
    ...SectionSplitProps.types
  }
  
const defaultProps = {
...SectionSplitProps.defaults
}

const FeaturesCoinBG = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {

    
const outerClasses = classNames(
'features-split section',
topOuterDivider && 'has-top-divider',
bottomOuterDivider && 'has-bottom-divider',
hasBgColor && 'has-bg-color',
invertColor && 'invert-color',
className
);

const innerClasses = classNames(
'features-split-inner section-inner',
topDivider && 'has-top-divider',
bottomDivider && 'has-bottom-divider'
);

const CoinBGClasses = classNames(
'split-wrap',
invertMobile && 'invert-mobile',
invertDesktop && 'invert-desktop',
alignTop && 'align-top'
);

const sectionHeader = {
title: 'Death Coin ?',
paragraph: 'It\'s about the death, but will not dead'
};


return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={CoinBGClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  What is Death Coin?
                  </h3>
                <p className="m-0">
                  Death Coin ($DTC) is one types of token belongs to native crypto currency that will be a BEP20 token on the Binance Smart Chain. $DTC is used primarily as a staking reward on DeGrave.io when creating NFT graves, purchasing digital offerings and making cryptocurrencies donations.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/whatIsCoin.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Why Death Coin?
                  </h3>
                <p className="m-0">
                  Death Coin can a bridge between target blockchain like Ethereum Blockchain to allow users ease of access to all functionally with the platform (DeGrave.io). $DTC ensures a fully decentralized model of governance. The Death Coin token provides additional benefits and enhances user engagement whilst being able to adopt the crypto currency for business activity. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/whycoin.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesCoinBG.propTypes = propTypes;
FeaturesCoinBG.defaultProps = defaultProps;

export default FeaturesCoinBG;










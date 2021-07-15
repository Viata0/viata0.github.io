import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const FeaturesMarketPlace = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const FeaturesMarketPlace = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Market Place',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={FeaturesMarketPlace}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <span className="testimonial-item-name text-color-high">Trading on DeGrave.io</span>
                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <p className="text-sm mb-0">
                    — $DTC is a role of token of the platform of DeGrave.io. It can be used to creating NFT graves, purchasing digital offerings and making cryptocurrencies donations and as a staking reward on DeGrave.io.
                      </p>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <span className="testimonial-item-name text-color-high">As real money</span>
                  <span className="text-color-low">  </span>
                  <span className="testimonial-item-link">
                    <a href="#0"></a>
                  </span>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <p className="text-sm mb-0">
                    — A decentralized and community-driven interpersonal network chain will be build that promote users to use $DTC as a trading medium for goods, services and knowledge in real life, and eventually will be listed on a crypto currency exchange, allowing users to exchange $DTC for other legal currencies.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesMarketPlace.propTypes = propTypes;
FeaturesMarketPlace.defaultProps = defaultProps;

export default FeaturesMarketPlace;
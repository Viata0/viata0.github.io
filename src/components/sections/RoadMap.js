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

const RoadMap = ({
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

  const RoadMap = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Road Map',
    paragraph: 'We keep forward, for better world'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={RoadMap}>

            <div className="split-item"></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  2021 Q2
                  </h3>
                <p className="m-0">
                  <ul>
                    <li>
                      Conception of the idea
                    </li>
                    <li>
                      Design Tokenomics
                    </li>
                    <li>
                      Design Go-To-Market Strategy  
                    </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../img/SVG/roadmapHaed.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item"></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  2021 Q3
                  </h3>
                <p className="m-0">
                  <ul>
                    <li>
                      Proving concept viability
                    </li>
                    <li>
                      Partners / Marketing Outreach
                    </li>
                    <li>
                      Team Building  
                    </li>
                    <li>
                      Pitch Deck Completion
                    </li>
                    <li>
                      Website Completion
                    </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../img/SVG/roadmapMid.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>
            
            <div className="split-item"></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  2021 Q4
                  </h3>
                <p className="m-0">
                  <ul>
                    <li>
                      Public Launch
                    </li>
                    <li>
                      Seed Round Token Sale
                    </li>
                    <li>
                      Smart Contract Deployment  
                    </li>
                    <li>
                      Marketing Campaign
                    </li>
                    <li>
                      NFT Grave Listing Rewards Start
                    </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../img/SVG/roadmapMid.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item"></div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  2022 Q1
                  </h3>
                <p className="m-0">
                  <ul>
                    <li>
                      Private + Public Token Sale
                    </li>
                    <li>
                      BSC Integration
                    </li>
                    <li>
                      Token Generation Event  
                    </li>
                    <li>
                      Team Expansion
                    </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../img/SVG/roadmapMid.svg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item"></div>
            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  Future Plans
                  </h3>
                <p className="m-0">
                  <ul>
                    <li>
                      R&D of IOS and Android Application
                    </li>
                    <li>
                      Multi-cryptocurrencies payment method
                    </li>
                    <li>
                      Additional Deathcoin Use Cases  
                    </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../img/SVG/roadmapTail.svg')}
                  alt="Features split 01"
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

RoadMap.propTypes = propTypes;
RoadMap.defaultProps = defaultProps;

export default RoadMap;
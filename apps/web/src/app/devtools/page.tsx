'use client';

import {
  Container,
  CodeSnippet,
  FormField,
  PasswordField,
  TextAreaField,
  SelectField,
  CheckboxButton,
  CheckboxGroup,
  RadioButton,
  RadioGroup,
  CalendarField,
  Button,
  IconButton,
  Pillow,
  TabButton,
  TabGroup,
  Rating,
  AppLogo,
  AppFeedback,
  BookingCard,
  LineChart,
  PlaceCard,
  PlaceFeedback,
  PlaceSwiper,
} from '@org/ui';
import * as snippet from './codeSnippets';
import * as mock from './mockData';
import { ThemeSwitcher } from './components';
import './styles.scss';

export default function DevToolsPage() {
  return (
    <main className="devtool">
      <h1>Devtools</h1>

      {/* ----------- Theme Switcher ----------- */}
      <Container>
        <ThemeSwitcher />
      </Container>

      {/* ----------- FormField Component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <FormField {...mock.formFieldMockData.text} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.formFieldSnippets.text}
            language="tsx"
            filename="FormFieldText.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <FormField {...mock.formFieldMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.formFieldSnippets.disabled}
            language="tsx"
            filename="FormFieldDisabled.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <FormField {...mock.formFieldMockData.password} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.formFieldSnippets.password}
            language="tsx"
            filename="FormFieldPassword.tsx"
          />
        </div>
      </Container>

      {/* ----------- PasswordField component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <PasswordField {...mock.passwordFieldMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.passwordFieldSnippets.standard}
            language="tsx"
            filename="PasswordFieldStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <PasswordField {...mock.passwordFieldMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.passwordFieldSnippets.disabled}
            language="tsx"
            filename="PasswordFieldDisabled.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <PasswordField {...mock.passwordFieldMockData.ariaOnly} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.passwordFieldSnippets.ariaOnly}
            language="tsx"
            filename="PasswordFieldAria.tsx"
          />
        </div>
      </Container>

      {/* ----------- TextAreaField component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <TextAreaField {...mock.textAreaFieldMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.textAreaFieldSnippets.standard}
            language="tsx"
            filename="TextAreaStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <TextAreaField {...mock.textAreaFieldMockData.customHeight} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.textAreaFieldSnippets.customHeight}
            language="tsx"
            filename="TextAreaCustomHeight.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <TextAreaField {...mock.textAreaFieldMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.textAreaFieldSnippets.disabled}
            language="tsx"
            filename="TextAreaDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- SelectField component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <SelectField {...mock.selectFieldMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.selectFieldSnippets.standard}
            language="tsx"
            filename="SelectStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <SelectField {...mock.selectFieldMockData.withIcons} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.selectFieldSnippets.withIcons}
            language="tsx"
            filename="SelectWithIcons.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <SelectField {...mock.selectFieldMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.selectFieldSnippets.disabled}
            language="tsx"
            filename="SelectDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- CheckboxButton component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <CheckboxButton {...mock.checkboxButtonMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.checkboxButtonSnippets.standard}
            language="tsx"
            filename="CheckboxStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <CheckboxButton {...mock.checkboxButtonMockData.checked} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.checkboxButtonSnippets.checked}
            language="tsx"
            filename="CheckboxChecked.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <CheckboxButton {...mock.checkboxButtonMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.checkboxButtonSnippets.disabled}
            language="tsx"
            filename="CheckboxDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- CheckboxGroup component: Basic ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <CheckboxGroup {...mock.checkboxGroupMockData.basic} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.checkboxGroupSnippets.basic}
            language="tsx"
            filename="CheckboxGroupBasic.tsx"
          />
        </div>
      </Container>

      {/* ----------- CheckboxGroup component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <CheckboxGroup {...mock.checkboxGroupMockData.preSelected} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.checkboxGroupSnippets.preSelected}
            language="tsx"
            filename="CheckboxGroupSelected.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <CheckboxGroup {...mock.checkboxGroupMockData.mixed} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.checkboxGroupSnippets.mixed}
            language="tsx"
            filename="CheckboxGroupMixed.tsx"
          />
        </div>
      </Container>

      {/* ----------- RadioButton component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <RadioButton {...mock.radioButtonMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.radioButtonSnippets.standard}
            language="tsx"
            filename="RadioStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <RadioButton {...mock.radioButtonMockData.selected} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.radioButtonSnippets.selected}
            language="tsx"
            filename="RadioSelected.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <RadioButton {...mock.radioButtonMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.radioButtonSnippets.disabled}
            language="tsx"
            filename="RadioDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- RadioGroup component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <RadioGroup {...mock.radioGroupMockData.basic} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.radioGroupSnippets.basic}
            language="tsx"
            filename="RadioGroupBasic.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <RadioGroup {...mock.radioGroupMockData.preSelected} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.radioGroupSnippets.preSelected}
            language="tsx"
            filename="RadioGroupSelected.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <RadioGroup {...mock.radioGroupMockData.mixed} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.radioGroupSnippets.mixed}
            language="tsx"
            filename="RadioGroupMixed.tsx"
          />
        </div>
      </Container>

      {/* ----------- CalendarField component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <CalendarField {...mock.calendarFieldMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.calendarFieldSnippets.standard}
            language="tsx"
            filename="CalendarStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <CalendarField {...mock.calendarFieldMockData.limited} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.calendarFieldSnippets.limited}
            language="tsx"
            filename="CalendarLimited.tsx"
          />
        </div>
      </Container>

      {/* ----------- Button component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.primary} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.primary}
            language="tsx"
            filename="ButtonPrimary.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.success} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.success}
            language="tsx"
            filename="ButtonSuccess.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.danger} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.danger}
            language="tsx"
            filename="ButtonDanger.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.warning} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.warning}
            language="tsx"
            filename="ButtonWarning.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.gray} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.gray}
            language="tsx"
            filename="ButtonGray.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.disabled}
            language="tsx"
            filename="ButtonDisabled.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.loading} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.loading}
            language="tsx"
            filename="ButtonLoading.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Button {...mock.buttonMockData.submit} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.buttonSnippets.submit}
            language="tsx"
            filename="ButtonSubmit.tsx"
          />
        </div>
      </Container>

      {/* ----------- IconButton component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <IconButton {...mock.iconButtonMockData.navigation} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.iconButtonSnippets.navigation}
            language="tsx"
            filename="IconButtonNav.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <IconButton {...mock.iconButtonMockData.success} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.iconButtonSnippets.success}
            language="tsx"
            filename="IconButtonLarge.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <IconButton {...mock.iconButtonMockData.delete} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.iconButtonSnippets.delete}
            language="tsx"
            filename="IconButtonDanger.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <IconButton {...mock.iconButtonMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.iconButtonSnippets.disabled}
            language="tsx"
            filename="IconButtonDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- Pillow component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.primary} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.primary}
            language="tsx"
            filename="PillowPrimary.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.success} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.success}
            language="tsx"
            filename="PillowSuccess.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.danger} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.danger}
            language="tsx"
            filename="PillowDanger.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.warning} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.warning}
            language="tsx"
            filename="PillowWarning.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.info} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.info}
            language="tsx"
            filename="PillowInfo.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.dark} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.dark}
            language="tsx"
            filename="PillowDark.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.disabled}
            language="tsx"
            filename="PillowDisabled.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Pillow {...mock.pillowMockData.active} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.pillowSnippets.active}
            language="tsx"
            filename="PillowActive.tsx"
          />
        </div>
      </Container>

      {/* ----------- TabButton component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <TabButton {...mock.tabButtonMockData.active} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.tabButtonSnippets.active}
            language="tsx"
            filename="TabActive.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <TabButton {...mock.tabButtonMockData.static} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.tabButtonSnippets.static}
            language="tsx"
            filename="TabStatic.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <TabButton {...mock.tabButtonMockData.disabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.tabButtonSnippets.disabled}
            language="tsx"
            filename="TabDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- TabGroup component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <TabGroup {...mock.tabGroupMockData.standard} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.tabGroupSnippets.standard}
            language="tsx"
            filename="TabGroupStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <TabGroup {...mock.tabGroupMockData.preSelected} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.tabGroupSnippets.preSelected}
            language="tsx"
            filename="TabGroupActive.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <TabGroup {...mock.tabGroupMockData.withDisabled} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.tabGroupSnippets.withDisabled}
            language="tsx"
            filename="TabGroupDisabled.tsx"
          />
        </div>
      </Container>

      {/* ----------- Rating component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <Rating {...mock.ratingMockData.integer} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.ratingSnippets.integer}
            language="tsx"
            filename="RatingInteger.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Rating {...mock.ratingMockData.float} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.ratingSnippets.float}
            language="tsx"
            filename="RatingFloat.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <Rating {...mock.ratingMockData.fallback} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.ratingSnippets.fallback}
            language="tsx"
            filename="RatingFallback.tsx"
          />
        </div>
      </Container>

      {/* ----------- AppLogo component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <AppLogo {...mock.appLogoMockData.horizontal} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.appLogoSnippets.horizontal}
            language="tsx"
            filename="AppLogoHorizontal.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <AppLogo {...mock.appLogoMockData.vertical} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.appLogoSnippets.vertical}
            language="tsx"
            filename="AppLogoVertical.tsx"
          />
        </div>
      </Container>

      {/* ----------- AppFeedback component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <AppFeedback {...mock.appFeedbackMockData.highRating} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.appFeedbackSnippets.usage}
            language="tsx"
            filename="AppFeedbackExample.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <AppFeedback {...mock.appFeedbackMockData.midRating} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.appFeedbackSnippets.usage}
            language="tsx"
            filename="AppFeedbackVariation.tsx"
          />
        </div>
      </Container>

      {/* ----------- BookingCard component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <BookingCard {...mock.bookingCardMockData.upcoming} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.bookingCardSnippets.usage}
            language="tsx"
            filename="BookingCardStandard.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <BookingCard {...mock.bookingCardMockData.nearFuture} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.bookingCardSnippets.usage}
            language="tsx"
            filename="BookingCardLongTitle.tsx"
          />
        </div>
      </Container>

      {/* ----------- LineChart component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <LineChart {...mock.lineChartMockData.monthly} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.lineChartSnippets.monthly}
            language="tsx"
            filename="LineChartMonthly.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <LineChart {...mock.lineChartMockData.weekly} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.lineChartSnippets.weekly}
            language="tsx"
            filename="LineChartWeekly.tsx"
          />
        </div>
      </Container>

      {/* ----------- PlaceCard component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <PlaceCard {...mock.placeCardMockData.recommended} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.placeCardSnippets.usage}
            language="tsx"
            filename="PlaceCardRecommended.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <PlaceCard {...mock.placeCardMockData.hot} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.placeCardSnippets.usage}
            language="tsx"
            filename="PlaceCardHot.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <PlaceCard {...mock.placeCardMockData.simple} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.placeCardSnippets.usage}
            language="tsx"
            filename="PlaceCardSimple.tsx"
          />
        </div>
      </Container>

      {/* ----------- PlaceFeedback component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <PlaceFeedback {...mock.placeFeedbackMockData.detailed} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.placeFeedbackSnippets.usage}
            language="tsx"
            filename="PlaceFeedbackDetailed.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <PlaceFeedback {...mock.placeFeedbackMockData.short} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.placeFeedbackSnippets.usage}
            language="tsx"
            filename="PlaceFeedbackShort.tsx"
          />
        </div>
      </Container>

      {/* ----------- PlaceSwiper component ----------- */}
      <Container className="devtool__section devtool__section--col">
        <div className="devtool__example">
          <PlaceSwiper {...mock.placeSwiperMockData.popular} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.placeSwiperSnippets.usage}
            language="tsx"
            filename="PlaceSwiperStandard.tsx"
          />
        </div>
      </Container>

      {/* ----------- CodeSnippet component ----------- */}
      <Container className="devtool__section">
        <div className="devtool__example">
          <CodeSnippet {...mock.codeSnippetMockData.tsx} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.codeSnippetSnippets.usage}
            language="tsx"
            filename="CodeSnippetUsage.tsx"
          />
        </div>
      </Container>

      <Container className="devtool__section">
        <div className="devtool__example">
          <CodeSnippet {...mock.codeSnippetMockData.noFilename} />
        </div>

        <div className="devtool__usage">
          <CodeSnippet
            code={snippet.codeSnippetSnippets.usage}
            language="tsx"
          />
        </div>
      </Container>
    </main>
  );
}

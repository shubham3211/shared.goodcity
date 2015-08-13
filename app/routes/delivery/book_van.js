import VerifyOfferStateRoute from './verify_offer_state';

export default VerifyOfferStateRoute.extend({

  setupController: function(controller, model){
    controller.set('model', model);

    if(!model.get("wasDropOff")){
      var selectedSlot = model.get('schedule.slotName');
      var timeslot = controller.get('timeSlots').filterBy('name', selectedSlot).get('firstObject');
      controller.set('selectedDate', model.get('schedule.scheduledAt'));
      controller.set('selectedTime', timeslot);
    } else {
      controller.set('selectedDate', null);
      controller.set('selectedTime', null);
    }
  }

});

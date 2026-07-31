import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  pickup = 'Downtown Terminal';
  dropoff = 'Airport Express';
  selectedRide = 'Standard';
  estimatedFare = 18;
  tip = 0;
  bookingMessage = '';

  rideOptions = [
    { name: 'Standard', price: 18, icon: 'car-outline', description: 'Budget-friendly ride' },
    { name: 'Premium', price: 28, icon: 'car-sport-outline', description: 'Comfort and extra space' },
    { name: 'XL', price: 36, icon: 'bus-outline', description: 'Great for groups' }
  ];

  extras = [
    { label: 'Child seat', value: 'child-seat', price: 5 },
    { label: 'Airport meet-and-greet', value: 'meet', price: 8 },
    { label: 'Extra luggage', value: 'luggage', price: 4 }
  ];

  selectedExtras: string[] = [];
  driverOnline = true;
  eta = '3 min';

  selectRide(rideName: string) {
    this.selectedRide = rideName;
    this.estimatedFare = this.rideOptions.find((ride) => ride.name === rideName)?.price ?? 18;
    this.updateFare();
  }

  toggleExtra(extraValue: string) {
    if (this.selectedExtras.includes(extraValue)) {
      this.selectedExtras = this.selectedExtras.filter((value) => value !== extraValue);
    } else {
      this.selectedExtras = [...this.selectedExtras, extraValue];
    }
    this.updateFare();
  }

  updateFare() {
    const ride = this.rideOptions.find((item) => item.name === this.selectedRide);
    const baseFare = ride?.price ?? 18;
    const extraFees = this.extras
      .filter((extra) => this.selectedExtras.includes(extra.value))
      .reduce((sum, extra) => sum + extra.price, 0);
    this.estimatedFare = baseFare + extraFees + this.tip;
  }

  bookRide() {
    this.bookingMessage = `Your ${this.selectedRide} ride is booked from ${this.pickup} to ${this.dropoff}.`;
  }

  addTip() {
    this.tip = this.tip === 0 ? 3 : 0;
    this.updateFare();
  }
}

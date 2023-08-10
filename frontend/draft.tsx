try {
    const createdSeller = await sellersService.createNewSeller(newSeller);
    console.log('Seller created:', createdSeller);
    onSubmit(newSeller);
  } 
  
  catch (error) {
    console.error('Error creating seller:', error);
  }
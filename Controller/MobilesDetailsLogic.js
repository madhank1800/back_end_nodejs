
const mobileProductDetailsModel = require('../Model/mobilesModels');
exports.mobileDetailsData = (req, res) => {
    console.log("req.body", req.body);
    console.log("req.body", req.body.id);
      console.log("req.body", req.body.productName);
    let mobilesDetailsList = new mobileProductDetailsModel({
      generalDetails: {
        id: req.body.id,
        productName: req.body.productName,
        price: req.body.price,
        modelName: req.body.modelName,
        instock: req.body.InStock,
        rom: req.body.rom,
        ram: req.body.ram,
        battery: req.body.battery,
        processors: req.body.processors,
        warranty: req.body.warranty,
        description: req.body.description,
        discount: req.body.discount,
        deliveryDate: req.body.deliveryDate,
        camera: {
          frontcamera: req.body.frontcamera,
          backCamera: req.body.backCamera,
        },
        images: {
          firstImage: req.body.firstImage,
          secondImage: req.body.secondImage,
        },
      },
      hybridSimSlot: req.body.hybridSimSlot,
      browseType: req.body.browseType,
      simType: req.body.simType,
      quickCharging: req.body.quickCharging,
      DisplayFeautres: {
        displaySize: req.body.displaySize,
        Resolution: req.body.Resolution,
        ResolutionType: req.body.ResolutionType,
        DisplayType: req.body.DisplayType,
      },
      OsAndProcessorsFeautres: {
        operatingSystem: req.body.operatingSystem,
        ProcessorsType: req.body.ProcessorsType,
        ProcessorCore: req.body.ProcessorCore,
        PrimaryClockSpeed: req.body.PrimaryClockSpeed,
        OperatingFrequency: req.body.OperatingFrequency,
      },
      MemoryAndStorageFeautres: {
        InternalStorage: req.body.InternalStorage,
        Ram: req.body.Ram,
        MemoryCardSlotType: req.body.MemoryCardSlotType,
        CallLogMemory: req.body.CallLogMemory,
      },
      CameraFeautres: {
        PrimaryCameraAvailable: req.body.PrimaryCameraAvailable,
        PrimaryCamera: req.body.PrimaryCamera,
        PrimaryCameraFeautres: req.body.PrimaryCameraFeautres,
        SecondaryCameraAvailable: req.body.SecondaryCameraAvailable,
        SecondaryCamera: req.body.SecondaryCamera,
        SecondaryCameraFeautres: req.body.SecondaryCameraFeautres,
        VideoRecording: req.body.VideoRecording,
        FullHdRecording: req.body.FullHdRecording,
      },
      CallFeautres: {
        PhoneBook: req.body.PhoneBook,
      },
      MultiMediaFeautres: {
        FmRadio: req.body.FmRadio,
        FmRadioRecording: req.body.FmRadioRecording,
        AudioFormats: req.body.AudioFormats,
        VideoFormats: req.body.VideoFormats,
      },
      Dimensions: {
        width: req.body.width,
        Height: req.body.Height,
        Depth: req.body.Depth,
        weight: req.body.weight,
      },
    });

    mobilesDetailsList.save();
    res.send("success");
 }
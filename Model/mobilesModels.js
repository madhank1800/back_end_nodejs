const mongoose = require('mongoose');

const mobilesDetailsSchema = new mongoose.Schema({
    generalDetails: {
        id: { type: Number },
        productName: { type: String },
        price: { type: Number },
        modelName: { type: String },
        instock:{type:String},
        rom: { type: String },
        ram: { type: String },
        battery: { type: String },
        processors: { type: String },
        warranty: { type: String },
        description: { type: String },
        discount: { type: Number },
        deliveryDate: { type: String },
        camera: {
            frontcamera: { type: String },
            backCamera: { type: String }
        },
        images: {
            firstImage: { type: String },
            secondImage:{type:String}
        }
    },
    hybridSimSlot: { type: String },
    browseType: { type: String },
    simType: { type: String },
    quickCharging: { type: String },
    DisplayFeautres: {
        displaySize: { type: String },
        Resolution: { type: String },
        ResolutionType: { type: String },
        DisplayType:{type:String}
    },
    OsAndProcessorsFeautres: {
        operatingSystem: { type: String },
        ProcessorsType: { type: String },
        ProcessorCore: { type: String },
        PrimaryClockSpeed: { type: String },
        OperatingFrequency:{type:String}
    },
    MemoryAndStorageFeautres: {
        InternalStorage: { type: String },
        Ram: { type: String },
        MemoryCardSlotType: { type: String },
        CallLogMemory: { type: String },
        
    },
    CameraFeautres: {
        PrimaryCameraAvailable: { type: String },
        PrimaryCamera: { type: String },
        PrimaryCameraFeautres: { type: String },
        SecondaryCameraAvailable: { type: String },
        SecondaryCamera: { type: String },
        SecondaryCameraFeautres: { type: String },
        VideoRecording: { type: String },
        FullHdRecording:{type:String}
    },
    CallFeautres: {
        PhoneBook:{type:String}
    },
    MultiMediaFeautres: {
        FmRadio: { type: String },
        FmRadioRecording: { type: String },
        AudioFormats: { type: String },
        VideoFormats:{type:String}
    },
    Dimensions: {
        width: { type: String },
        Height: { type: String },
        Depth: { type: String },
        weight:{type:String}
    }
    



})


 module.exports = mongoose.model("mobileDetailsList", mobilesDetailsSchema);